library(tidyverse)
library(brms)

source("pre_process_pilot.R")

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

## fit model to training data

my_f <- bf(rt ~ feature:lnd + (feature:lnd|observer), 
           ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

my_prior <- c(
  prior_string("normal(-0.5, 0.3)",  class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))

n_chains = 4
n_itr = 1000

# now run model
m <- brm(
  my_f, 
  data = d1,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  inits = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)

saveRDS(m, "pilot1.model")
rm(m)

# now run model for test data


my_f <- bf(rt ~ feature1:feature2:lnd + (feature1:feature2:lnd|observer), 
           ndt ~ 1 + (1|observer))


m <- brm(
  my_f, 
  data = d2,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  inits = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)


saveRDS(m, "pilot2.model")


