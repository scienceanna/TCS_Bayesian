library(tidyverse)
library(brms)
library(tidybayes)
library(bridgesampling)

###
# Hypothesis 1
###

m_sft <- readRDS("exp1.model")
m_nrl <- readRDS("exp1_normal.model")
m_log <- readRDS("exp1_lognormal.model")

tibble(model = c("shifted lognormal", "normal", "lognormal"),
       LOO = model_weights(m_sft, m_nrl, m_log, weights = "loo"),
       WAIC = model_weights(m_sft, m_nrl, m_log, weights = "waic")) -> d


write_csv(d, "model_comp_hyp1.csv")

rm(d, m_nrl, m_log)

###
# Hypothesis 2
###

m_lin <- readRDS("exp1_linear.model")

tibble(model = c("loglinear in n", "linear in n"),
       LOO = model_weights(m_sft, m_lin, weights = "loo"),
       WAIC = model_weights(m_sft, m_lin, weights = "waic")) -> d

write_csv(d, "model_comp_hyp2.csv")

rm(d, m_lin, m_sft)


###

m1 <- bridge_sampler(m1, silent = TRUE) 
m0 <- bridge_sampler(m0, silent = TRUE) 


tibble(model = c("rings", "not rings"), 
       `posterior probability` = post_prob(m1, m0)) %>% 
  knitr::kable() 
