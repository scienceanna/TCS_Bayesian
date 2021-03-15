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


get_orig_w <- function(d) {
  
  model_params <- set_up_model(1, "shifted_lognormal")
  model_params$my_formula <- my_f
  model_params$df <- d
  m <- run_model(model_params, ppc = "no")
  h <- hdci(posterior_samples(m, "logN_TP1"), 0.97)
  w_orig <- h[2] - h[1]
  return(w_orig)
  
  
}

w_orig <- get_orig_w(d)


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
                             trials = c(2,4,6,8,10,12,14,16,20,24,32,40), 
                             peeps= c(20, 40, 80, 160))

# Fixing some that didn't fit properly

#samples <- modelr::data_grid(d, 
#                             trials = 40, 
#                             peeps= 40)

w <- map_dbl(1:nrow(samples), get_hdpi_for_subsample)

samples$w <- w

d_mean <- 0.18

o_prop <- w_orig/d_mean

samples$w_prop <- samples$w/d_mean
samples$peeps <- factor(samples$peeps)

#samples <- samples %>%
#  filter(w_prop < 1)

plt_power <- ggplot(samples, aes(trials, w_prop, colour = peeps)) + geom_point() + 
  geom_line() + geom_hline(yintercept = o_prop, linetype = "dashed") +
  annotate("text", label = "X", x = 40, y = 0.14683205, size = 6) +
  theme_bw() + xlab("Number of samples") + 
  ylab("HDPI width as a proportion of slope")

plt_power

ggsave("../plots/power_plot.pdf", plt_power, width = 4, height = 4)

