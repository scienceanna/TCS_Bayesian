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
   prior_string("normal(0, 0.1)", class = "b"),
   prior_string("normal(2, 1)", class = "b", coef = "d_featurecircle"),
   prior_string("normal(2, 1)", class = "b", coef = "d_featurediamond"),
   prior_string("normal(2, 1)", class = "b", coef = "d_featuretriangle"))

m <- brm(
  
    rt ~ 0 + d_feature +  d_feature:N_T, 
  data = d,
  family = inverse.gaussian(),
   prior = myp,
  chains = 1,
  iter = 5000
)


