library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)


source("scripts/our_functions.R")

source("scripts/import_and_tidy.R")
# remove error trials and very very short responses




d %>% mutate(
  rt = rt/1000) %>%
  filter(exp_id == "1b")  -> d


print(dim(d))
d <- d %>%
  filter(error == 0) %T>% {print(dim(.))} %>%
  filter(rt > 0.100, rt < 2)  %T>% {print(dim(.))}

myp <- c(
  prior_string("normal(-2, 1)", class = "Intercept"),
  prior_string("normal(0, 1)", class = "b"),
  prior_string("cauchy(0, 0.1)", class = "sigma"),
  prior_string("uniform(-4, -0.5)", class = "Intercept", dpar = "ndt"))

m <- brm(
  bf(
    rt ~ N_T, 
    ndt ~ 1),
  data = d,
  family = shifted_lognormal(),
  prior = myp,
  chains = 1,
)


