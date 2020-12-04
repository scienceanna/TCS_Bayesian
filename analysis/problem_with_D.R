# the problem with calculating D!



library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)
library(latex2exp)

# set ggplot2 theme
theme_set(see::theme_lucid())

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# functions used for the analysis reimplementation
source("scripts/reimplementation.R")

# functions used for our Bayesian re-analysis
source("scripts/our_functions.R")

source("scripts/import_and_tidy.R")



d$rt <- d$rt * 1000
###################################################
## Computational Replication of Buetti et al (2019)
###################################################
De <- map_dfr(unique(d$exp_id), calc_D_per_feature)


# what is a typical value of D in exp 1? 



D2 <- seq(min(filter(De, exp_id == 1)$D),
           max(filter(De, exp_id == 1)$D), length.out = 100)


D1 <- min(filter(De, exp_id == 1)$D)
Dmin <- tibble(
  Dc = "min",
  D2 = D2,
  collinear = 1/((1/D1) + (1/D2)),
  best_feature = pmin(D1, D2),
  orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))) %>% 
  pivot_longer(-c(D2, Dc) ,names_to = "method", values_to = "Dp")

D1 <- median(filter(De, exp_id == 1)$D)
Dmedian <- tibble(
  Dc = "median",
  D2 = D2,
  collinear = 1/((1/D1) + (1/D2)),
  best_feature = pmin(D1, D2),
  orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))) %>% 
  pivot_longer(-c(D2, Dc), names_to = "method", values_to = "Dp")

D1 <- max(filter(De, exp_id == 1)$D)
Dmax <- tibble(
  Dc = "max",
  D2 = D2,
  collinear = 1/((1/D1) + (1/D2)),
  best_feature = pmin(D1, D2),
  orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))) %>% 
  pivot_longer(-c(D2, Dc), names_to = "method", values_to = "Dp")

D <- bind_rows(Dmin, Dmedian, Dmax)

ggplot(D, aes(x  = D2, y = Dp, colour = method)) + 
  geom_point() + facet_wrap(~ Dc)

