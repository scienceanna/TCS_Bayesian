library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)


source("scripts/our_functions.R")

source("scripts/import_and_tidy.R")
# remove error trials and very very short responses


d %>% mutate(
  rt = rt/1000) -> d

print(dim(d))
d <- d %>%
  filter(error == 0) %T>% {print(dim(.))} %>%
  filter(
    rt > quantile(rt, 0.005), 
    rt < quantile(rt, 0.995))  %T>% {print(dim(.))}

d <- filter(d, exp_id == "1b")

# 
# 
 myp <- c(
   prior_string("normal(0, 1)", class = "b"),
   prior_string("normal(2, 2)", class = "b", coef = "d_featurecircle"),
   prior_string("normal(2, 2)", class = "b", coef = "d_featurediamond"),
   prior_string("normal(2, 2)", class = "b", coef = "d_featuretriangle"))

m <- brm(
    rt ~ 0 + d_feature +  d_feature:N_T , 
  data = d,
  family = inverse.gaussian(),
   prior = myp,
  chains = 1,
  # sample_prior = "only",
  iter = 2000
)


d %>%
  filter(N_T > 0) %>%
  mutate(
    d_feature = fct_drop(d_feature),
    p_id = fct_drop(p_id)) %>%
  ungroup() -> d_plt

# no group-level effects are included, so we are plotting 
# for the average participant
d_plt %>% 
  modelr::data_grid(N_T = seq(0,36,4), d_feature) %>%
  add_fitted_draws(m, re_formula = NA, scale = "response", n = 100) -> d_hdci
d_hdci %>% mean_hdci(.width = c(0.53, 0.97)) -> d_hdci


plot_ribbon_quantiles(d_hdci, d_plt, c(-1, 10), 1, plot_type = "fitted")
