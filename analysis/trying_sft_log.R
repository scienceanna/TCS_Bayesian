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
  filter(rt > 0.200, rt < 2, exp_id == "1a")  %T>% {print(dim(.))}



myp <- c(
  prior_string("normal(-2, 1)", class = "Intercept"),
  prior_string("normal(0, 1)", class = "b"),
  prior_string("cauchy(0, 1)", class = "sigma"),
  prior_string("uniform(-3, -1)", class = "Intercept", dpar = "ndt"))

m <- brm(
  bf(
    rt ~ N_T * d_feature, 
    ndt ~ 1),
  data = d,
  family = shifted_lognormal(),
  prior = myp,
  chains = 1,
)


