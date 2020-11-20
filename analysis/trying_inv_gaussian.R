library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)


source("scripts/our_functions.R")
source("scripts/reimplementation.R")
source("scripts/import_and_tidy.R")



d <- filter(d, id == 1)

d <- account_for_zero_distracters(d)

d <- filter(d, d_feature != "orange", d_feature != "yellow", d_feature != "blue")

#list of variables/coefs that we want to define priors for:
intercepts <- paste("d_feature", levels(d$d_feature), sep = "")
intercepts <- gsub("[[:space:]]", "", intercepts)
slopes <- paste("d_feature", levels(d$d_feature), ":logN_TP1", sep = "")
slopes <- gsub("[[:space:]]", "", slopes)
#
 myp <- c(
   prior_string("normal(2.5, 1)", class = "b", coef = intercepts),
   prior_string("normal(-5, 1)", class = "b", coef = slopes),
   prior_string("gamma(80, 10)", class = "shape"))

m <- brm(
    rt ~ 0 + d_feature + d_feature:log(N_T+1), 
  data = d,
  family = inverse.gaussian(),
   # prior = myp,
  chains = 1,
  # sample_prior = "only",
  iter = 5000,
  control =list(adapt_delta = 0.95),
  seed = 2
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
  add_predicted_draws(m, re_formula = NA, scale = "response", n = 1000) %>%
  filter(is.finite(.prediction)) -> d_hdci

d_hdci %>% mean_hdci(.width = c(0.53, 0.97)) -> d_hdci


plot_ribbon_quantiles(d_hdci, d_plt, c(-1, 2.5), 1, plot_type = "predicted")

