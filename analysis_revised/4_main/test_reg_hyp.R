library(tidyverse)
library(brms)

options(digits = 3)

m_sft <- readRDS("pilot1.model")
m_nrl <- readRDS("pilot1_normal.model")
m_log <- readRDS("pilot1_lognormal.model")


model_weights(m_sft, m_nrl, m_log, weights = "loo")
model_weights(m_sft, m_nrl, m_log, weights = "waic")

rm(m_nrl, m_log)


m_lin <- readRDS("pilot1_linear.model")


model_weights(m_sft, m_lin, weights = "loo")
model_weights(m_sft, m_lin, weights = "waic")
