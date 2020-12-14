#### Set up and data import ####
library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# functions used for the analysis implementation
source("scripts/reimplementation.R")

# functions used for our Bayesian re-analysis
source("scripts/our_functions.R")

# import
source("scripts/import_and_tidy.R")
d <- our_changes_to_data(d) 
d <- filter(d, exp_id == 1, d_feature == "blue")


my_f <- bf(rt ~ 1 + log(N_T+1) + (1|p_id), 
           ndt ~ 1 + (1|p_id))


get_hdpi_for_subsample <- function(n_trials) {
  
  d %>% group_by(p_id,  N_T) %>%
    slice_sample(n = n_trials) -> d_ss

  model_params <- set_up_model(1, "shifted_lognormal")
  model_params$my_formula <- my_f
  model_params$df <- d_ss
  m <- run_model(model_params, ppc = "no")
  h <- hdci(posterior_samples(m, "logN_TP1"), 0.97)
  w <- h[2] - h[1]
  return(w)
  
}

samples <- c(2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40)

w <- map_dbl(samples, get_hdpi_for_subsample)


plt_data <- tibble(
  samples = samples,
  w = w)

ggplot(plt_data, aes(samples, w)) + geom_point() + geom_line() + theme_bw()
