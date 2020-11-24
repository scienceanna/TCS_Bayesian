library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)


source("scripts/our_functions.R")
source("scripts/reimplementation.R")
source("scripts/import_and_tidy.R")

options(mc.cores = parallel::detectCores())

d <- filter(d, exp_id == 1) %>%
  mutate(d_feature = fct_drop(d_feature),
         p_id = fct_drop(p_id))


#list of variables/coefs that we want to define priors for:
intercepts <- paste("d_feature", levels(d$d_feature), sep = "")
intercepts <- gsub("[[:space:]]", "", intercepts)
slopes <- paste("d_feature", levels(d$d_feature), ":logN_TP1", sep = "")
slopes <- gsub("[[:space:]]", "", slopes)
#
myp <- c(
   prior_string("normal(-1.4, 0.2)", class = "b", coef = intercepts),
   prior_string("normal(0, 0.2)", class = "b", coef = slopes),
   prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
   prior_string("cauchy(0, 0.4)", class = "sigma"),
   prior_string("cauchy(0, 0.1)", class = "sd"),
   prior_string("cauchy(0, 0.1)", class = "sd", dpar = "ndt"))

m <- brm(
 bf(
   rt ~ 0 + d_feature + d_feature:log(N_T+1) + (1|p_id), 
   ndt ~ 1 + (1|p_id)),
 family = shifted_lognormal(),
 data = sample_frac(d,0.1),
 prior = myp,
 chains = 1,
 iter = 3000,
 inits = function(){
   list(b_ndt = array(-5))
 },
 control =list(adapt_delta = 0.9)
)


d %>%
  filter(N_T > 0) %>%
  mutate(
    p_id = fct_drop(p_id)) %>%
  ungroup() -> d_plt


# no group-level effects are included, so we are plotting 
# for the average participant
d_plt %>% 
  modelr::data_grid(N_T = seq(0,36,4), d_feature) %>%
  add_predicted_draws(m, re_formula = NA, scale = "response", n = 1000) %>%
  filter(is.finite(.prediction)) -> d_hdci

d_hdci %>% mean_hdci(.width = c(0.53, 0.97)) -> d_hdci


plot_ribbon_quantiles(d_hdci, d_plt, c(0, 2), 1, plot_type = "predicted")

# 
# 
# Links: mu = identity; sigma = identity; ndt = log 
# Formula: rt ~ 0 + d_feature + d_feature:log(N_T + 1) + (1 | p_id) 
# ndt ~ 1
# Data: sample_frac(d, 0.1) (Number of observations: 3277) 
# Samples: 1 chains, each with iter = 5000; warmup = 2500; thin = 1;
# total post-warmup samples = 2500
# 
# Group-Level Effects: 
#   ~p_id (Number of levels: 40) 
# Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
# sd(Intercept)     0.28      0.03     0.22     0.36 1.01      400      683
# 
# Population-Level Effects: 
#   Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
# ndt_Intercept                 -1.23      0.01    -1.26    -1.20 1.00     1225     1526
# d_featureorange               -1.55      0.06    -1.67    -1.43 1.00      319      558
# d_featureblue                 -1.54      0.06    -1.66    -1.42 1.00      281      692
# d_featureyellow               -1.46      0.06    -1.58    -1.34 1.00      283      528
# d_featurediamond              -1.54      0.06    -1.66    -1.43 1.00      306      888
# d_featurecircle               -1.49      0.06    -1.61    -1.37 1.00      304      622
# d_featuretriangle             -1.46      0.06    -1.58    -1.35 1.00      356      749
# d_featureorange:logN_TP1       0.09      0.02     0.05     0.12 1.00     2787     1970
# d_featureblue:logN_TP1         0.24      0.02     0.21     0.27 1.00     2856     1858
# d_featureyellow:logN_TP1       0.07      0.02     0.04     0.10 1.00     2416     1803
# d_featurediamond:logN_TP1      0.23      0.02     0.20     0.27 1.00     2741     1969
# d_featurecircle:logN_TP1       0.17      0.02     0.14     0.20 1.00     2850     1803
# d_featuretriangle:logN_TP1     0.31      0.02     0.27     0.34 1.00     2302     1663
# 
# Family Specific Parameters: 
#   Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
# sigma     0.49      0.01     0.47     0.51 1.00     1456     1790
