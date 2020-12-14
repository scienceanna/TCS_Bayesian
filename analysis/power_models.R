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



orig_model <- readRDS("models/exp_1_sft.models")

n <- list(peeps = 100, trials = 6)





get_hdpi_for_subsample <- function(n) {
  
  
  # simulate dataset of required size from original model
  d %>% modelr::data_grid(N_T, d_feature, p_id = 1:samples$peeps[n])  %>%
    add_predicted_draws(orig_model, re_formula = NULL, allow_new_levels = TRUE, n = samples$trials[n]) %>%
    ungroup() %>% 
    select(p_id, d_feature, N_T, trial = ".draw", rt = ".prediction") -> d_sim
  
  # fit new model to simualated data!
  model_params <- set_up_model(1, "shifted_lognormal")
  model_params$my_formula <- my_f
  model_params$df <- d_sim
  m <- run_model(model_params, ppc = "no")
  h <- hdci(posterior_samples(m, "logN_TP1"), 0.97)
  w <- h[2] - h[1]
  return(w)
  
}

samples <- modelr::data_grid(d, 
                             trials = c(6, 12, 40), 
                             peeps= c(20, 40, 80))

w <- map_dbl(1:nrow(samples), get_hdpi_for_subsample)


plt_data <- tibble(
  samples = samples,
  w = w)

ggplot(plt_data, aes(samples, w)) + geom_point() + geom_line() + theme_bw()
