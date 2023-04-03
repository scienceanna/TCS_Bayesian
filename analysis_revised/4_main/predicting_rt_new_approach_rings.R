library(tidyverse)
library(tidybayes)
library(brms)

source("1_pre_process_data.R")

# predict RTs using fixed effects only, and ignore ring

d1 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d1

d2 %>% mutate(observer = as.numeric(observer),
              ring = as.numeric(ring)) %>%
  select(-nd) -> d2

d2 %>% unite(feature, feature1, feature2) -> d2

ndraws <- 100

m1 <- readRDS("exp1_ring.model") 
m2 <- readRDS("exp2_ring.model") 

get_model <- function(m) {
   
  samples <- gather_draws(m, `[b(sigma)]_.*`, regex=T, ndraws = ndraws)
  
   samples_ff <- filter(samples, str_detect(.variable, "b_")) %>% 
     select(-.chain, -.iteration)
   
   samples_ff  %>% 
     filter(str_detect(.variable, ":lnd")) %>%
     rename(feature = ".variable", D = ".value") %>%
     mutate(feature = str_remove(feature, "b_"),
            feature = str_remove(feature, "feature"),
            feature = str_remove(feature, ":lnd"))  %>% 
     separate(feature, into = c("ring", "feature"), sep = ":") %>% 
     mutate(ring = parse_number(ring)) -> slopes
   
   samples_ff %>% 
     ungroup() %>%
     filter(str_detect(.variable, "ndt")) %>%
     rename(ndt = ".value") %>%
     select(-.variable) -> ndt
   
   samples_ff %>%
     filter(str_detect(.variable, "b_ring")) %>%
     filter(!str_detect(.variable, ":")) %>%
     rename(ring = ".variable", a = ".value") %>%
     mutate(ring = parse_number(ring)) -> intercepts
   
   
   sigma <- VarCorr(m, summary=F)$residual %>% as_tibble()
   sigma$sd <- as.numeric(sigma$sd)
   sigma$.draw = 1:10000
  
   sigma %>% filter(.draw %in% samples$.draw) -> sigma
   
   
   #########################
   # join things together
   ##########################
  
  intercepts %>% 
    full_join(slopes, by = c(".draw", "ring")) %>%
    full_join(ndt, by = c(".draw")) %>%
    full_join(sigma, by = ".draw") %>%
    arrange( feature) -> models
  
  # standardise draw indexing
  models %>% group_by(feature, ring) %>%
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
  select(.draw, ring, feature, D_collinear, D_best_feature, D_orth_contrast) -> Dp

full_join(model2, Dp) %>%
  pivot_longer(c(D, D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "b") -> models

rm(Dp)
rm(model1, model2)



###############################
# Sanity check
###############################


models %>% 
  pivot_wider(names_from = "method", values_from = "b") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") -> D

ggplot(D, aes(Dp, D, colour = feature)) + 
  geom_point(alpha = 0.1) + 
  facet_wrap(~method) +
  geom_abline() + 
  geom_smooth(method = lm, aes(group = 1), colour = "black", se = F) +
  facet_wrap(~ring)

rm(D)

###############################
# predict Rt
###############################

make_pred <- function(drw) {
  
  draw  <- unique(models$.draw)[drw]
  
  mod <- filter(models, .draw == draw)
  
  full_join(mod, 
            d2 %>% filter(lnd>0) , 
            by = c("ring", "feature")) %>%
    select(.draw, method, ring, feature, lnd, a, b, ndt, sd, rt) %>%
    mutate(p_mu_rt = exp(ndt) + exp(a + b*lnd),
           loglik = dshifted_lnorm(rt, meanlog = p_mu_rt, sdlog = sd, shift = ndt, log = T)) %>%
    arrange(method, ring, feature, lnd) -> dp
  
  return(dp)

}

dp <- map_df(1:ndraws, make_pred)

# sanity check plot
dp %>% sample_frac(0.001) %>%
  ggplot(aes(x = p_mu_rt - rt, y = loglik)) + geom_point(alpha = 0.1)
############



dp %>% 
  select(.draw, method, ring, feature, lnd, rt, p_mu_rt, loglik) %>%
  mutate(abs_err = abs(rt-p_mu_rt)) -> dp

# sanity check plot
dp %>% sample_frac(0.01) %>%
  ggplot(aes(x = abs_err, y = loglik)) + geom_point(alpha = 0.1)

##############################################

dp %>%  group_by(.draw,ring, method) %>%
  summarise(sum_err = sum(abs_err)) %>%
  pivot_wider(names_from = "method", values_from = "sum_err") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(rel_sum_abs_err = Dp/D) -> Derr

Derr %>% group_by(method, ring) %>% 
  median_hdi(rel_sum_abs_err, .width = 0.97)


Derr %>% ggplot(aes(ring, rel_sum_abs_err, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_wrap(~method) +
  geom_hline(yintercept = 1, linetype = 2)


dp %>%  group_by(.draw, method, ring) %>%
  summarise(loglik =sum(loglik)) %>%
  pivot_wider(names_from = "method", values_from = "loglik") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(relloglik = Dp/D) -> Dll

Dll %>% group_by(method, ring) %>% 
  median_hdi(relloglik, .width = 0.97)


Dll %>% ggplot(aes(ring, relloglik, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_wrap(~method) +
  geom_hline(yintercept = 1, linetype = 2)


# work out which method gives the best prediction on different samples

ggplot(t, aes(prob_best, fill = method)) + geom_density() + facet_grid(feature~ring)
  

Dll %>% ggplot(aes(lnd, relloglik, fill = method)) +
    stat_lineribbon(alpha = 0.2, .width = 0.53) +
    facet_grid(.~feature) + 
  geom_hline(yintercept = 1, linetype = 2)



