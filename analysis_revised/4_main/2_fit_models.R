library(tidyverse)
library(brms)

source("1_pre_process_data.R")


# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

n_chains = 4
n_itr = 2000

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

# now run model
m <- brm(
  my_f,
  data = d1,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE,
  sample_prior = "only"

)

saveRDS(m, "exp1_prior.model")
rm(m)

###############################################
## fit shifted lognormal model to training data
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

# now run model
m <- brm(
  my_f,
  data = d1,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)

saveRDS(m, "exp1.model")
rm(m)

###############################################
## fit lognormal model to training data
###############################################

my_f <- (rt ~ feature:lnd + (feature:lnd|observer))

my_prior <- c(
  prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"))

# now run model
m <- brm(
  my_f,
  data = d1,
  family = brmsfamily("lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)

saveRDS(m, "exp1_lognormal.model")
rm(m)


###############################################
## fit normal model to training data
###############################################

my_f <- (rt ~ feature:lnd + (feature:lnd|observer))

my_prior <- c(
  prior_string("normal(0, 0.25)", class = "b"),
  prior_string("normal(0.5, 0.2)", class = "Intercept"),
  prior_string("normal(0, 0.25)", class = "sigma"),
  prior_string("normal(0, 0.25)", class = "sd"))


# now run model
m <- brm(
  my_f,
  data = d1,
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)

saveRDS(m, "exp1_normal.model")
rm(m)


###############################################
## fit (sft log) model with linear num distracters
###############################################

my_f <- bf(rt ~ feature:nd + (feature:nd|observer),
           ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

my_prior <- c(
  prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))

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

saveRDS(m, "exp1_linear.model")
rm(m)


###############################################
## fit shifted lognormal model to test data
###############################################
# 
 d2 <- d2 %>% unite(feature, feature1, feature2)

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

# now run model
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


saveRDS(m, "exp2_random.model")



# now treating person as fixed effect as we want to predict person-level effects

my_f <- bf(rt ~ observer:feature:lnd, 
           ndt ~ 0 + observer)

np <- length(unique(d2$observer))

my_inits <- list(list(b_ndt = as.array(rep(-10, np))),
                 list(b_ndt = as.array(rep(-10, np))),
                 list(b_ndt = as.array(rep(-10, np))),
                 list(b_ndt = as.array(rep(-10, np))))

my_prior <- c(
  prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "b", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"))

m <- brm(
  my_f, 
  data = d2,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  #stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)


saveRDS(m, "exp2_fixed.model")



#################################################
#################################################
#
# Now fit ring models
#
#################################################
#################################################

n_chains = 4
n_itr = 5000

my_f <- brms::bf(rt ~ 0 + ring + ring:feature:lnd + (1 + feature:lnd|observer), 
                 ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

my_prior <- c(
  # prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring1"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring2"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring3"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))

# now run model for single feature data
m <- brm(
  my_f,
  data = d1,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE,
  backend = 'cmdstanr'
)

saveRDS(m, "exp1_ring_more_random.model")
rm(m)

# now run model for single feature data
m <- brm(
  my_f,
  data = d2,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE,
  backend = 'cmdstanr'
)

saveRDS(m, "exp2_ring_more_random.model")
rm(m)


#######################################
# Now try more complex random effect structure

my_f <- brms::bf(rt ~ 0 + ring + ring:feature:lnd + (0 + ring + feature:lnd|observer), 
                 ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

my_prior <- c(
  # prior_string("normal(-0.5, 0.3)", class = "Intercept"),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring1"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring2"),
  prior_string("normal(-1, 0.3)", class = "b", coef = "ring3"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))

# now run model for single feature data
m <- brm(
  my_f,
  data = d1,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  init = my_inits,
  ##stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE,
  backend = 'cmdstanr'
)


