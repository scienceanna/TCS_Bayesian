library(tidyverse)
library(brms)

source("1_pre_process_pilot.R")


ggplot(d1, aes(x = lnd, y = rt)) + geom_dotplot()

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

n_chains = 1
n_itr = 1000

###############################################
## fit shifted lognormal model to training data
###############################################

my_f <- bf(rt ~ feature:lnd + (feature:lnd|observer), 
           ndt ~ 1 + (1|observer))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))
my_inits <- list(list(Intercept_ndt = -10))
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

saveRDS(m, "pilot1.model")
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

saveRDS(m, "pilot1_lognormal.model")
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

saveRDS(m, "pilot1_normal.model")
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

saveRDS(m, "pilot1_linear.model")
rm(m)




###############################################
## fit shifted lognormal model to test data
###############################################

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



saveRDS(m, "pilot2_random.model")



# now treating person as fixed effect as we want to predict person-level effects



my_f <- bf(rt ~ observer:feature:lnd, 
           ndt ~ 0 + observer)


my_inits <- list(list(b_ndt = as.array(rep(-10, 4))),list(b_ndt = as.array(rep(-10, 4))),list(b_ndt = as.array(rep(-10, 4))),list(b_ndt = as.array(rep(-10, 4))))

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
  inits = my_inits,
  #stanvars = my_stanvar,
  save_pars = save_pars(all=TRUE),
  silent = TRUE
)


saveRDS(m, "pilot2_fixed.model")


