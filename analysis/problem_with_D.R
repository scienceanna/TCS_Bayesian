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


###################################################
## Computational Replication of Buetti et al (2019)
###################################################
De <- map_dfr(unique(d$exp_id), calc_D_per_feature)


# what is a typical value of D in exp 1? 

D2 <- seq(min(filter(De, exp_id == 1)$D),
           max(filter(De, exp_id == 1)$D), length.out = 100)


cs <- c("orange", "yellow", "blue")
ss <- c("circle", "diamond", "triangle")

df <- tibble()

for (col in cs){
  
  Dc = filter(De, d_feature == col, exp_id == 1)$D

  Dss = c(
    filter(De, d_feature == ss[1], exp_id == 1)$D,
    filter(De, d_feature == ss[2], exp_id == 1)$D,
    filter(De, d_feature == ss[3], exp_id == 1)$D)
    
  df <- bind_rows(df, tibble(
    colour = col,
    shape = ss,
    collinear = 1/((1/Dc) + (1/Dss)),
    best_feature = pmin(Dc, Dss),
    orth_contrast =  sqrt(1/((1/Dc^2) + (1/Dss^2)))) %>% 
    mutate(Dc = Dc, Ds = Dss) %>%
    pivot_longer(-c(colour, shape, Ds, Dc) ,names_to = "method", values_to = "Dp") )
   
  }
  

# get empirical values for Dcs

d2 <- filter(De, exp_id == 2) %>% separate(d_feature, into = c("colour", "shape")) %>%
  rename(Dcs = "D") %>%
  select(-exp_id) %>% full_join(df) %>%
  mutate(
    colour = as_factor(colour),
    colour = fct_relevel(colour, "orange", "yellow", "blue"))

ggplot(d2, aes(x  = Ds, y = Dp, colour = method)) + 
  geom_line() + geom_point() + 
  geom_point(aes(y = Dcs), shape = 3, size = 3, colour = "black") +facet_wrap(~ colour) + 
  scale_x_continuous(breaks = unique(d2$Ds), label = levels(d2$colour))

