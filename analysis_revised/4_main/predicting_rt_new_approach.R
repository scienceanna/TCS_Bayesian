library(tidyverse)
library(tidybayes)
library(brms)

source("1_pre_process_data.R")

d1 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d1

d2 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d2

d2 %>% unite(feature, feature1, feature2) -> d2

ndraws <- 100


m1 <- readRDS("exp1_ring.model") 
m2 <- readRDS("exp2_ring.model") 

get_model <- function(m) {
   
  samples <- gather_draws(m, `[rb(sigma)]_.*`, regex=T, ndraws = ndraws)
  
   samples_ff <- filter(samples, str_detect(.variable, "b_")) %>% 
     select(-.chain, -.iteration)
   
    samples_rf <- filter(samples, str_detect(.variable, "r_")) %>% 
     select(-.chain, -.iteration) -> samples_rf
   
   samples_rf %>%
     filter(str_detect(.variable, ":lnd")) %>%
     rename(feature = ".variable", rD = ".value") %>%
     separate(feature, into = c("observer", "feature"), ",") %>%
     mutate(observer = parse_number(observer),
            feature = str_remove(feature, "feature"),
            feature = str_remove(feature, ":lnd"),
            feature = str_remove(feature, "]"))  -> slopes_rf
  
   samples_rf %>%
     filter(str_detect(.variable, "ndt")) %>%
     rename(observer = ".variable", ndt = ".value") %>%
     mutate(observer = parse_number(observer)) -> ndt_rf
   
   samples_rf %>%
     filter(str_detect(.variable, "ring")) %>%
     rename(ring = ".variable", intercept = ".value") %>%
     separate(ring, into  = c("observer", "ring"), ",") %>%
     mutate(observer = parse_number(observer),
            ring = parse_number(ring)) -> intercept_rf
   
   samples_ff  %>% 
     filter(str_detect(.variable, ":lnd")) %>%
     rename(feature = ".variable", D = ".value") %>%
     mutate(feature = str_remove(feature, "b_"),
            feature = str_remove(feature, "feature"),
            feature = str_remove(feature, ":lnd"))  %>% 
     separate(feature, into = c("ring", "feature"), sep = ":") %>% 
     mutate(ring = parse_number(ring)) -> slopes_ff
     
   samples_ff %>% 
     ungroup() %>%
     filter(str_detect(.variable, "ndt")) %>%
     select(-.variable) -> ndt_ff
   
   samples_ff %>%
     filter(str_detect(.variable, "b_ring")) %>%
     filter(!str_detect(.variable, ":")) %>%
     rename(ring = ".variable") %>%
     mutate(ring = parse_number(ring)) -> intercept_ff
   
   sigma <- VarCorr(m, summary=F)$residual %>% as_tibble()
   sigma$sd <- as.numeric(sigma$sd)
   sigma$.draw = 1:10000
  
   sigma %>% filter(.draw %in% samples$.draw) -> sigma
   
   
   #########################
   # join things together
   ##########################
   
  # first combine fixed and random slopes
   
  full_join(slopes_rf, slopes_ff, by = c(".draw", "feature")) %>%
     mutate(D = D + rD) %>%
     select(-rD) -> slopes 
  
  # next up, intercepts!
  full_join(intercept_rf, intercept_ff, by = c(".draw", "ring")) %>%
    mutate(a = intercept + .value) %>%
    select(-intercept, -.value) -> intercepts
  
  # now, ndt
  full_join(ndt_rf, ndt_ff, by = ".draw") %>%
    mutate(ndt = ndt + .value) %>%
    select(-.value)  -> ndt
  
  intercepts %>% 
    full_join(slopes, by = c(".draw", "observer", "ring")) %>%
    full_join(ndt, by = c(".draw", "observer")) %>%
    full_join(sigma, by = ".draw") %>%
    mutate(ring = as_factor(ring)) %>%
    arrange(observer, ring, feature) -> models
  
  # standardise draw indexing
  models %>% group_by(observer, ring, feature) %>%
    mutate(.draw = 1:length(unique(.draw))) %>%
    ungroup() -> models
  
  return(models)
}

model1 <- get_model(m1)
rm(m1)
model2 <- get_model(m2)
rm(m2)
# convert in order to get D predictions for m2
full_join(
  mod_col <- model1 %>% filter(feature %in% c("orange", "pink", "purple")) %>%
    rename(feature1 = "feature", D1 = "D"),
  mod_sha <- model1 %>% filter(feature %in% c("circle", "diamond", "triangle")) %>%
    rename(feature2 = "feature", D2 = "D")) %>%
  unite(feature, feature1, feature2) %>%
  mutate(D_collinear = 1/((1/D1) + (1/D2)),
         D_best_feature = pmin(D1, D2),
         D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))) %>%
  select(.draw, observer, ring, feature, D_collinear, D_best_feature, D_orth_contrast) -> Dp

full_join(model2, Dp) %>%
  pivot_longer(c(D, D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "D") -> models

rm(Dp)
rm(model1, model2)


make_pred <- function(drw) {
  
  draw  <- unique(models$.draw)[drw]
  
  mod <- filter(models, .draw == draw)
  
  full_join(mod, d2, by = c("observer", "ring", "feature")) %>%
    select(.draw, method, observer, ring, feature, lnd, a, D, ndt, sd, rt) %>%
    mutate(p_mu_rt = exp(ndt) + exp(a + D*lnd)) %>%
    arrange(method, observer, ring, feature, lnd) -> dp
  
  return(dp)

}

dp <- map_df(1:ndraws, make_pred)


dp %>% mutate(
  abs_err = abs(rt-p_mu_rt)) %>%
  group_by(observer, method,  ring) %>%
  summarise(median_err = median(abs_err)) %>%
  pivot_wider(names_from = "method", values_from = "median_err") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(rel_median_abs_err = Dp/D,
         ring = as.numeric(ring)) -> Derr


Derr %>% ggplot(aes(ring, rel_median_abs_err, fill = method)) +
  stat_lineribbon(alpha = 0.2)
  coord_cartesian(ylim = c(1, 2))

  
  filter(d2, observer == 37) %>% ggplot(aes(lnd, rt)) + geom_point() + 
    facet_grid(feature~ring) +
    geom_smooth(method = lm)
