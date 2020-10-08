library(tidyverse)
library(brms)
library(tidybayes)

my_models_nrl <- readRDS("my_nrl.models")[[1]]
my_models_idt <- readRDS("my_idt.models")[[1]]
# 
# my_models_nrl <- add_criterion(my_models_nrl, c("loo", "waic"))
# my_models_idt <- add_criterion(my_models_idt, c("loo", "waic"))
# model_weights(my_models_idt, my_models_nrl)

# import data (exp 2a only)
source("scripts/import_and_tidy.R")
d <- filter(d, error == 0, rt > 0.01, exp_id == "2a", d_feature != "no distractors") 
d <- mutate(d, d_feature = fct_drop(d_feature))
d %>% mutate(rt = rt/1000,
             d_feature = as_factor(str_replace_all(d_feature, " ", ""))) -> d



# Just trying to plot the RT distributions

source("scripts/our_functions.R")

samples_nrl <- posterior_samples(my_models_nrl, c("^b","sigma"), subset = 1:10)
samples_idt <- posterior_samples(my_models_idt, c("^b","sigma"), subset = 1:10)

compute_dist <- function(feat, ss, N_T) {
  
  
  a <- ss[paste("b_d_feature", feat, sep = "")][[1]]
  D <- ss[paste("b_d_feature", feat, ":logN_TP1", sep = "")][[1]]
  sigma <-ss["sigma"][[1]]
                            
   mu <- a + log(N_T+1)*D
  
  d_out <- tibble(d_feature = as.character(), N_T = as.numeric(), iter = as.numeric(), rt = as.numeric(), p = as.numeric())
  
  for (ii in 1:10) {
    d_out %>% add_row(
      d_feature = feat,
      N_T = N_T,
      iter = ii,
      rt = seq(0, 4, 0.01),
      p = dnorm(rt, mu[ii], sigma[ii]))-> d_out
  }
  
  return(d_out)
  
}

dm <- tibble()
for (n in unique(d$N_T)) {
  
  dm <- bind_rows(dm, 
                  map(levels(d$d_feature), compute_dist, samples_nrl, N_T = n))
  
}

dm %>% mutate(d_feature = as_factor(d_feature)) -> dm

ggplot() + 
  geom_density(data = d, aes(rt, fill = d_feature), alpha = 0.4, position = "identity") + 
  geom_path(data = dm, aes(rt, p, colour = d_feature, group = iter), alpha = 0.3) +
  facet_grid(N_T~d_feature) + coord_cartesian(xlim = c(0, 2))


