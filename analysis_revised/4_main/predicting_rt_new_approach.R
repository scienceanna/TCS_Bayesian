library(tidyverse)
library(tidybayes)
library(brms)

source("1_pre_process_data.R")
source("pred_rt_functions.R")

d1 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d1

d2 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d2

d2 %>% unite(feature, feature1, feature2) -> d2

ndraws <- 100


m1 <- readRDS("exp1_ring.model") 
m2 <- readRDS("exp2_ring.model") 

model1 <- get_rt_model_ring_obs(m1)
rm(m1)
model2 <- get_rt_model_ring_obs(m2)
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
               names_to = "method", values_to = "b") -> models

rm(Dp)
rm(model1, model2)


make_pred <- function(drw) {
  
  draw  <- unique(models$.draw)[drw]
  
  mod <- filter(models, .draw == draw)
  
  full_join(mod, d2, by = c("observer", "ring", "feature")) %>%
    select(.draw, method, observer, ring, feature, lnd, a, b, ndt, sd, rt) %>%
    mutate(p_mu_rt = exp(ndt) + exp(a + b*lnd),
           loglik = dshifted_lnorm(rt, meanlog = p_mu_rt, sdlog = sd, shift = ndt, log = T),
           abs_err = abs(rt-p_mu_rt)) %>%
    arrange(method, observer, ring, feature, lnd) %>%
    select(.draw, method, observer, ring, feature, lnd, rt, p_mu_rt, abs_err, loglik) -> dp
  
  return(dp)

}

dp <- map_df(1:ndraws, make_pred)



# sanity check plot
dp %>% sample_frac(0.01) %>%
  ggplot(aes(x = abs_err, y = loglik)) + geom_point(alpha = 0.1)





##############################################

dp %>%  group_by(.draw,lnd, ring, method) %>%
  summarise(sum_err = sum(abs_err)) %>%
  pivot_wider(names_from = "method", values_from = "sum_err") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(rel_sum_abs_err = Dp/D) -> Derr

Derr %>% ungroup() %>%
  group_by(method) %>% 
  median_hdi(rel_sum_abs_err, .width = 0.97)


Derr %>% ggplot(aes(lnd, rel_sum_abs_err, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_grid(ring~method) +
  geom_hline(yintercept = 1, linetype = 2) +
  coord_cartesian(ylim = c(1, 1.1))


dp %>%  group_by(.draw, method, ring) %>%
  summarise(loglik =sum(loglik)) %>%
  pivot_wider(names_from = "method", values_from = "loglik") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(relloglik = Dp - D) -> Dll

Dll %>% group_by(method, ring) %>% 
  median_hdi(relloglik, .width = 0.97)


Dll %>% ggplot(aes(ring, relloglik, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_wrap(~method) +
  geom_hline(yintercept = 1, linetype = 2) +
  coord_cartesian(ylim = c(-200, 500))


# work out which method gives the best prediction on different samples

ggplot(t, aes(prob_best, fill = method)) + geom_density() + facet_grid(feature~ring)


Dll %>% ggplot(aes(lnd, relloglik, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.53) +
  facet_grid(.~feature) + 
  geom_hline(yintercept = 1, linetype = 2)
