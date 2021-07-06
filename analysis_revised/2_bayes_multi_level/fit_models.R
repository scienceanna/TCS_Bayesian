#### Set up and data import ####
library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)

# use parallel cores for mcmc chains!
options(mc.cores = 6)

# functions used for the analysis implementation
source("../scripts/reimplementation.R")

# functions used for our Bayesian re-analysis
source("../scripts/our_functions.R")

# import and tidy data
source("../scripts/import_and_tidy.R")

# switch from ms to seconds
# Recode experiment as 1, 2, 3 and 4 
d <- our_changes_to_data(d)


training_models <- c("1a", "1b")
# 
# #### Prior fitting ####
# mdl_inputs_nrl <- set_up_model(training_models, "normal")
# prior_model_nrl <- run_model(mdl_inputs_nrl, ppc = "only")
# saveRDS(prior_model_nrl, "models/prior_nrl.models")
# 
# mdl_inputs_log <- set_up_model(training_models, "lognormal")
# prior_model_log <- run_model(mdl_inputs_log, ppc = "only")
# saveRDS(prior_model_log, "models/prior_log.models")
# 
# mdl_inputs_sft <- set_up_model(training_models, "shifted_lognormal")
# prior_model_sft <- run_model(mdl_inputs_sft, ppc = "only")
# saveRDS(prior_model_sft, "models/prior_sft.models")
# 
# rm(
#   prior_model_nrl, 
#   prior_model_log,
#   prior_model_sft)

#### Fit model for Expt 1&3 ####
training_models <- c("1a", "1b")

mdl_inputs_nrl <- set_up_model(training_models, "normal")
m_exp1_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp1_nrl, "models/exp_1_nrl.models") 

mdl_inputs_log <- set_up_model(training_models, "lognormal")
m_exp1_log <- run_model(mdl_inputs_log, ppc = "no") 
saveRDS(m_exp1_log, "models/exp_1_log.models")

mdl_inputs_sft <- set_up_model(training_models, "shifted_lognormal")
m_exp1_sft <- run_model(mdl_inputs_sft, ppc = "no") 
saveRDS(m_exp1_sft, "models/exp_1_sft.models")

rm(m_exp1_nrl,m_exp1_log, m_exp1_sft )

training_models <- c("3a", "3b")

mdl_inputs_nrl <- set_up_model(training_models, "normal")
m_exp3_nrl <- run_model(mdl_inputs_nrl, ppc = "no")
saveRDS(m_exp3_nrl, "models/exp_3_nrl.models") 

mdl_inputs_log <- set_up_model(training_models, "lognormal")
m_exp3_log <- run_model(mdl_inputs_log, ppc = "no") 
saveRDS(m_exp3_log, "models/exp_3_log.models")

mdl_inputs_sft <- set_up_model(training_models, "shifted_lognormal")
m_exp3_sft <- run_model(mdl_inputs_sft, ppc = "no") 
saveRDS(m_exp3_sft, "models/exp_3_sft.models")



#### Fit models for Expts 2a,b,c and 4a,b,c ####

exps_to_model <- c("2a", "2b", "2c")
   
mdl_inputs_sft <- set_up_model(exps_to_model , "shifted_lognormal")
m_exp_sft <- run_model(mdl_inputs_sft, ppc = "no")
saveRDS(m_exp_sft, "models/exp_2_sft.models")
   
exps_to_model <- c("4a", "4b", "4c")

mdl_inputs_sft <- set_up_model(exps_to_model , "shifted_lognormal")
m_exp_sft <- run_model(mdl_inputs_sft, ppc = "no")
saveRDS(m_exp_sft, paste("models/exp_4_sft.models", sep = ""))



rm(m_exp2_nrl,
   m_exp2_log,
   m_exp2_sft,
   m_exp3_nrl,
   m_exp3_log,
   m_exp3_sft,
   m_exp4_nrl,
   m_exp4_log,
   m_exp4_sft)


