library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)

my_models_nrl <- readRDS("my_nrl.models")[[1]]
my_models_idt <- readRDS("my_idt.models")[[1]]
# 

my_models_nrl <- add_criterion(my_models_nrl, c("loo", "waic"))
my_models_idt <- add_criterion(my_models_idt, c("loo", "waic"))
model_weights(my_models_idt, my_models_nrl)


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



compute_dist <- function(feat, m_family, N_T) {
  
  
  if (m_family == "normal") {
    ss <- samples_nrl
  } else {
    ss <- samples_idt
  }
  
  a <- ss[paste("b_d_feature", feat, sep = "")][[1]]
  D <- ss[paste("b_d_feature", feat, ":logN_TP1", sep = "")][[1]]
  sigma <-ss["sigma"][[1]]
                            
  mu <- a + log(N_T+1)*D
  
  d_out <- tibble(distribution = as.character(), d_feature = as.character(), N_T = as.numeric(), iter = as.numeric(), rt = as.numeric(), p = as.numeric())
  
  rt = seq(0.01, 3, 0.01)
  
  for (ii in 1:10) {
    if (m_family == "normal") 
    {
      pred = dnorm(rt, mu[ii], sigma[ii])
    } else {
       pred =    dlnorm(rt, mu[ii], sigma[ii])
}
                    
    d_out %>% add_row(
      distribution = m_family,
      d_feature = feat,
      N_T = N_T,
      iter = ii,
      rt = rt,
      p = pred)-> d_out
  }
  
  return(d_out)
  
}

d_nrl <- tibble()
for (n in unique(d$N_T)) {
  
  d_nrl <- bind_rows(d_nrl, 
                  map(levels(d$d_feature), compute_dist, "normal", N_T = n))
  
  
}

d_nrl %>% mutate(d_feature = as_factor(d_feature)) -> d_nrl

ggplot() + 
  geom_density(data = d, aes(rt, fill = d_feature), alpha = 0.4, position = "identity") + 
  geom_path(data = d_nrl, aes(rt, p, group = iter), colour = "purple", alpha = 0.3) +
  facet_grid(N_T~d_feature) + coord_cartesian(xlim = c(0, 2)) + ggtitle("normal") -> p1


d_lnrl <- tibble()
for (n in unique(d$N_T)) {
  
  d_lnrl <- bind_rows(d_lnrl, 
                     map(levels(d$d_feature), compute_dist, "log-normal", N_T = n))
  
  
}

d_lnrl %>% mutate(d_feature = as_factor(d_feature)) -> d_lnrl

ggplot() + 
  geom_density(data = d, aes(rt, fill = d_feature), alpha = 0.4, position = "identity") + 
  geom_path(data = d_lnrl, aes(rt, p, group = iter), colour = "cyan", alpha = 0.3) +
  facet_grid(N_T~d_feature) + coord_cartesian(xlim = c(0, 2)) + ggtitle("log normal") -> p2

p1+p2

ggsave("model_comp.pdf", width = 10, height = 5)

