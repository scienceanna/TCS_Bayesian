# this script looks at the individual differnces: is there a corelation between
# D in different conditions?

library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)
library(ggpmisc)
library(bridgesampling)
library(corrr)
library(ggridges)

# set ggplot2 theme
theme_set(theme_bw())

# circle, diamond, orange, pink, purple, triangle
colourPalette <- c("#e78429", "#ed968c", "#7c4b73","#aadce0", "#72bcd5", "528fad")

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# reduce the number of decimal places
options(digits = 3)

# functions used for our Bayesian re-analysis
source("../scripts/our_functions.R")

# set seed to make sure everything is reproducible 
set.seed(100320021)

## Import and Remove Outliers 

source("1_pre_process_data.R")


# read in stim info
dstim <- readxl::read_excel("../../psychopy_expt/searchDiscPavlovia/image_stimuli_final_master.xlsx") %>%
  select(image = "ImageFile", x = "target_pos_x", y = "target_pos_y") 


# for single feature condition, 
# merge data and then look at effect of r

full_join(dstim, d1, by = "image") %>%
  mutate(r = sqrt(x^2 + y^2),
         ring = case_when(r<150 ~ 1,
                          r<300 ~ 2,
                          r>300 ~ 3),
         ring = as_factor(ring)) %>%
  filter(is.finite(observer)) -> d1


# ggplot(d1, aes(x = lnd, y = log(rt), colour = ring)) + geom_jitter(height = 0) + 
#   geom_smooth(method = lm) + facet_wrap(~feature)


d1 %>% group_by(observer, feature, nd)





# model!




###############################################
## fit prior only model (sft lognormal, training data)
###############################################


n_chains = 4
n_itr = 5000





my_f <- brms::bf(rt ~ 0 + ring + ring:feature:lnd + (1 +feature:lnd|observer), 
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
  backend = 'cmdstanr'
)

saveRDS(m, "exp1_ring_more_random.model")
rm(m)
