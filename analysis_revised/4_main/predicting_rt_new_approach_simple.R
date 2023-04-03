library(tidyverse)
library(tidybayes)
library(brms)

source("1_pre_process_data.R")

# predict RTs using fixed effects only, and ignore ring

d1 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d1

d2 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d2

d2 %>% unite(feature, feature1, feature2) -> d2

ndraws <- 100

m1 <- readRDS("exp1.model") 
m2 <- readRDS("exp2_random.model") 


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
  select(.draw, feature, D_collinear, D_best_feature, D_orth_contrast) -> Dp

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
  geom_abline()

rm(D)

###############################
# predict Rt
###############################

make_pred <- function(drw) {
  
  draw  <- unique(models$.draw)[drw]
  
  mod <- filter(models, .draw == draw)
  
  full_join(mod, 
            d2 %>% filter(lnd>0) , 
            by = c("feature")) %>%
    select(.draw, method, feature, lnd, a, b, ndt, sd, rt) %>%
    mutate(p_mu_rt = exp(ndt) + exp(a + b*lnd),
           loglik = dshifted_lnorm(rt, meanlog = p_mu_rt, sdlog = sd, shift = ndt, log = T)) %>%
    arrange(method, feature, lnd) -> dp
  
  return(dp)

}

dp <- map_df(1:ndraws, make_pred)

# sanity check plot
dp %>% sample_frac(0.001) %>%
  ggplot(aes(x = p_mu_rt - rt, y = loglik)) + geom_point(alpha = 0.1)
############


dp %>% filter(lnd == 0) %>%
  ggplot(aes(x = method, b, fill = method)) +
  geom_boxplot() +  
  facet_grid(.~feature) 


dp %>% 
  select(.draw, method, feature, lnd, rt, p_mu_rt, loglik) %>%
  mutate(abs_err = abs(rt-p_mu_rt)) -> dp

# sanity check plot
dp %>% sample_frac(0.01) %>%
  ggplot(aes(x = abs_err, y = loglik)) + geom_point(alpha = 0.1)

##############################################

dp %>%  group_by(.draw,method, lnd) %>%
  summarise(sum_err = sum(abs_err)) %>%
  pivot_wider(names_from = "method", values_from = "sum_err") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(rel_sum_abs_err = Dp/D) -> Derr

Derr %>% group_by(method) %>% 
  median_hdi(rel_sum_abs_err, .width = 0.97)


Derr %>% ggplot(aes(lnd, rel_sum_abs_err, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_wrap(~method) +
  ggtitle("all 3 methods do as well as De")


dp %>%  group_by(.draw, method) %>%
  summarise(loglik =sum(loglik)) %>%
  pivot_wider(names_from = "method", values_from = "loglik") %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), 
               names_to = "method", values_to = "Dp") %>%
  mutate(relloglik = Dp/D) -> Dll

Dll %>% group_by(method) %>% 
  median_hdi(relloglik, .width = 0.97)


Dll %>% ggplot(aes(lnd, relloglik, fill = method)) +
  stat_lineribbon(alpha = 0.2, .width = 0.97) +
  facet_wrap(~method) +
  ggtitle("all 3 methods do as well as De")


# work out which method gives the best prediction on different samples

ggplot(t, aes(prob_best, fill = method)) + geom_density() + facet_grid(feature~ring)
  

Dll %>% ggplot(aes(lnd, relloglik, fill = method)) +
    stat_lineribbon(alpha = 0.2, .width = 0.53) +
    facet_grid(.~feature) + 
  geom_hline(yintercept = 1, linetype = 2)



