library(tidyverse)
library(brms)

source("1_pre_process_data.R")

d2 <- d2 %>% unite(feature, feature1, feature2)

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

n_chains = 4
n_itr = 5000

fit_model <- function(d, fam, prior, formula, samp_prior = "no") { 
  
  # wrapper function for running models
  # this way, easier to make sure all models are using the same settings!
  
  m <- brm(
    formula,
    data = d,
    family = brmsfamily(fam),
    prior = prior,
    chains = n_chains,
    iter = n_itr,
    init = my_inits,
    save_pars = save_pars(all=TRUE),
    silent = TRUE,
    backend = 'cmdstanr',
    control = list(adapt_delta = 0.9),
    sample_prior = samp_prior)
  
  return(m)
}

###############################################
## fit prior only model (sft lognormal, training data)
###############################################

my_f <- bf(rt ~ feature:lnd + (feature:lnd|observer), 
           ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

my_prior <- c(
  prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))



# now fit to double feature data!
m <- fit_model(d2, "shifted_lognormal", my_prior, my_f)
saveRDS(m, "exp2_random.model")
rm(m)

###############################################
## fit lognormal model to training data
###############################################

# my_f <- (rt ~ feature:lnd + (feature:lnd|observer))
# 
# my_prior_lm <- c(
#   prior_string("normal(-0.5, 0.3)", class = "Intercept"),
#   prior_string("normal(0, 0.2)", class = "b"),
#   prior_string("cauchy(0, 0.4)", class = "sigma"),
#   prior_string("cauchy(0, 0.05)", class = "sd"))
# 
# # now fit to single feature data!
# m <- fit_model(d1, "lognormal", my_prior_lm, my_f)
# saveRDS(m, "exp1_lognormal.model")
# rm(m, my_prior_lm)


###############################################
## fit normal model to training data
###############################################

# my_f <- (rt ~ feature:lnd + (feature:lnd|observer))
# 
# my_prior_nrml <- c(
#   prior_string("normal(0, 0.25)", class = "b"),
#   prior_string("normal(0.5, 0.2)", class = "Intercept"),
#   prior_string("normal(0, 0.25)", class = "sigma"),
#   prior_string("normal(0, 0.25)", class = "sd"))
# 
# # now fit to single feature data!
# m <- fit_model(d1, "normal", my_prior_nrml, my_f)
# saveRDS(m, "exp1_normal.model")
# rm(m, my_prior_nrml)

###############################################
## fit (sft log) model with linear num distracters
###############################################
# 
# my_f_lin_d <- bf(rt ~ feature:nd + (feature:nd|observer),
#            ndt ~ 1 + (1|observer))
# 
# my_prior_lin_d <- c(
#   prior_string("normal(-0.5, 0.3)", class = "Intercept"),
#   prior_string("normal(0, 0.2)", class = "b"),
#   prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
#   prior_string("cauchy(0, 0.4)", class = "sigma"),
#   prior_string("cauchy(0, 0.05)", class = "sd"),
#   prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))
# 
# # now fit to single feature data!
# m <- fit_model(d1, "shifted_lognormal", my_prior_lin_d, my_f_lin_d)
# saveRDS(m, "exp1_linear.model")
# rm(m, my_prior_lin_d, my_f_lin_d)

###############################################
# fit shifted lognormal model to test data
# testing person as a fixed effect
###############################################


# # now treating person as fixed effect as we want to predict person-level effects
# my_f <- bf(rt ~ observer:feature:lnd,
#            ndt ~ 0 + observer)
# 
# np <- length(unique(d2$observer))
# 
# my_inits <- list(list(b_ndt = as.array(rep(-10, np))),
#                  list(b_ndt = as.array(rep(-10, np))),
#                  list(b_ndt = as.array(rep(-10, np))),
#                  list(b_ndt = as.array(rep(-10, np))))
# 
# my_prior <- c(
#   prior_string("normal(-0.5, 0.3)", class = "Intercept"),
#   prior_string("normal(0, 0.2)", class = "b"),
#   prior_string("normal(-1, 0.5)", class = "b", dpar = "ndt" ),
#   prior_string("cauchy(0, 0.4)", class = "sigma"))
# 
# # now fit to double feature data!
# m <- fit_model(d2, "shifted_lognormal", my_prior, my_f)
# 
# 
# saveRDS(m, "exp2_fixed.model")

#################################################
#################################################
#
# Now fit ring models
#
#################################################
#################################################
# 
# my_f <- brms::bf(rt ~ 0 + ring + ring:feature:lnd + (0 + ring + feature:lnd|observer), 
#                  ndt ~ 1 + (1|observer))
# 
# my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))
# 
# my_prior <- c(
#   # prior_string("normal(-0.5, 0.3)", class = "Intercept"),
#   prior_string("normal(0, 0.2)", class = "b"),
#   prior_string("normal(-1, 0.3)", class = "b", coef = "ring1"),
#   prior_string("normal(-1, 0.3)", class = "b", coef = "ring2"),
#   prior_string("normal(-1, 0.3)", class = "b", coef = "ring3"),
#   prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
#   prior_string("cauchy(0, 0.4)", class = "sigma"),
#   prior_string("cauchy(0, 0.05)", class = "sd"),
#   prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))
# 
# # now run model for single feature data
# m <- fit_model(d1, "shifted_lognormal", my_prior, my_f)
# saveRDS(m, "exp1_ring.model")
# rm(m)
# 
# # now run model for double feature data
# m <- fit_model(d2, "shifted_lognormal", my_prior, my_f)
# saveRDS(m, "exp2_ring.model")
# rm(m)
