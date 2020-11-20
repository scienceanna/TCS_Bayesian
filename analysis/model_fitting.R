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

# import and tidy data
source("scripts/import_and_tidy.R")


#### Prior fitting ####
mdl_inputs_nrl <- set_up_model(1, "normal")
prior_model_nrl <- run_model(mdl_inputs_nrl, ppc = "only")
saveRDS(prior_model_nrl, "models/prior_nrl.models")

mdl_inputs_log <- set_up_model(1, "lognormal")
prior_model_log <- run_model(mdl_inputs_log, ppc = "only")
saveRDS(prior_model_log, "models/prior_log.models")

rm(
  prior_model_nrl, 
  prior_model_log)

#### Fit model for Expt 1 ####

mdl_inputs_nrl <- set_up_model(1, "normal")
m_exp1_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp1_nrl, "models/exp_1_nrl.models") 

mdl_inputs_log <- set_up_model(1, "lognormal")
m_exp1_log <- run_model(mdl_inputs_log, ppc = "no") 
saveRDS(m_exp1_log, "models/exp_1_log.models")

#### Calculating model weights to decide on best model ####

loo_m_exp1_nrl <- loo(m_exp1_nrl, nsamples=4500)
saveRDS(loo_m_exp1_nrl, "models/loo_m_exp1_nrl.rds")
loo_m_exp1_log <- loo(m_exp1_log, nsamples=4500, moment_match = TRUE)
saveRDS(loo_m_exp1_log, "models/loo_m_exp1_log.rds")

loo_list <- list(loo_m_exp1_nrl, loo_m_exp1_log)
loo_model_weights(loo_list)

rm(m_exp1_nrl,
   m_exp1_log,
   loo_m_exp1_nrl,
   loo_m_exp1_log)

#### Fit models for Expts 2, 3, and 4 ####


# Experiment 2
mdl_inputs_nrl <- set_up_model(2, "normal")
m_exp2_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp2_nrl, "models/exp_2_nrl.models")

mdl_inputs_log <- set_up_model(2, "lognormal")
m_exp2_log <- run_model(mdl_inputs_log, ppc = "no")
saveRDS(m_exp2_log, "models/exp_2_log.models")

# Experiment 3
mdl_inputs_nrl <- set_up_model(3, "normal")
m_exp3_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp3_nrl, "models/exp_3_nrl.models")

mdl_inputs_log <- set_up_model(3, "lognormal")
m_exp3_log <- run_model(mdl_inputs_log, ppc = "no")
saveRDS(m_exp3_log, "models/exp_3_log.models")

# Experiment 4
mdl_inputs_nrl <- set_up_model(4, "normal")
m_exp4_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp4_nrl, "models/exp_4_nrl.models")

mdl_inputs_log <- set_up_model(4, "lognormal")
m_exp4_log <- run_model(mdl_inputs_log, ppc = "no")
saveRDS(m_exp4_log, "models/exp_4_log.models")

rm(m_exp2_nrl,
   m_exp2_log,
   m_exp3_nrl,
   m_exp3_log,
   m_exp4_nrl,
   m_exp4_log)




