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

d <- read_csv('models/ss_data.csv')

mdl_inputs_sft <- set_up_model(1, "shifted_lognormal")
m_exp1_sft <- run_model(mdl_inputs_sft, ppc = "no") 
saveRDS(m_exp1_sft, "models/exp_1p_sft.models")
