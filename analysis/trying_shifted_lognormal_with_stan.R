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

myp <- c(
   prior_string("normal(-1.4, 0.2)", class = "b", coef = intercepts),
   prior_string("normal(0, 0.2)", class = "b", coef = slopes),
   prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
   prior_string("cauchy(0, 0.4)", class = "sigma"),
   prior_string("cauchy(0, 0.1)", class = "sd"))

m <- brm(
 bf(
   rt ~ 0 + d_feature + d_feature:log(N_T+1) + (1|p_id), 
   ndt ~ (1|p_id)),
  family = shifted_lognormal(),
 data = d,
  prior = myp,
  chains = 1,
  # sample_prior = "only",
  iter = 3000,
  control =list(adapt_delta = 0.9),
  inits = list(list(b_nt = as.array(-5)))
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


plot_ribbon_quantiles(d_hdci, d_plt, c(-1, 2.5), 1, plot_type = "predicted")

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

#### ADVENTURES IN STAN ####


write("// Stan model

data {
  int<lower=1> N;  // total number of observations
  vector[N] Y;  // response variable
  int<lower=1> K;  // number of population-level effects
  matrix[N, K] X;  // population-level design matrix
  // data for group-level effects of ID 1
  int<lower=1> N_1;  // number of grouping levels
  int<lower=1> M_1;  // number of coefficients per level
  int<lower=1> J_1[N];  // grouping indicator per observation
  // group-level predictor values
  vector[N] Z_1_1;
  // data for group-level effects of ID 2
  int<lower=1> N_2;  // number of grouping levels
  int<lower=1> M_2;  // number of coefficients per level
  int<lower=1> J_2[N];  // grouping indicator per observation
  // group-level predictor values
  vector[N] Z_2_ndt_1;
  int prior_only;  // should the likelihood be ignored?
}
transformed data {
  real min_Y = min(Y);
}
parameters {
  vector[K] b;  // population-level effects
  real<lower=0> sigma;  // residual SD
  real<upper=0> Intercept_ndt;  // temporary intercept for centered predictors
  vector<lower=0>[M_1] sd_1;  // group-level standard deviations
  vector[N_1] z_1[M_1];  // standardized group-level effects
  vector<lower=0>[M_2] sd_2;  // group-level standard deviations
  vector[N_2] z_2[M_2];  // standardized group-level effects
}
transformed parameters {
  vector[N_1] r_1_1;  // actual group-level effects
  vector[N_2] r_2_ndt_1;  // actual group-level effects
  r_1_1 = (sd_1[1] * (z_1[1]));
  r_2_ndt_1 = (sd_2[1] * (z_2[1]));
}
model {
  // likelihood including all constants
  if (!prior_only) {
    // initialize linear predictor term
    vector[N] mu = X * b;
    // initialize linear predictor term
    vector[N] ndt = Intercept_ndt + rep_vector(0.0, N);
    for (n in 1:N) {
      // add more terms to the linear predictor
      mu[n] += r_1_1[J_1[n]] * Z_1_1[n];
    }
    for (n in 1:N) {
      // add more terms to the linear predictor
      ndt[n] += r_2_ndt_1[J_2[n]] * Z_2_ndt_1[n];
    }
    for (n in 1:N) {
      // apply the inverse link function
      ndt[n] = exp(ndt[n]);
    }
    target += lognormal_lpdf(Y - ndt | mu, sigma);
  }
  // priors including all constants
  target += normal_lpdf(b[1] | -1.4, 0.2);
  target += normal_lpdf(b[2] | -1.4, 0.2);
  target += normal_lpdf(b[3] | -1.4, 0.2);
  target += normal_lpdf(b[4] | -1.4, 0.2);
  target += normal_lpdf(b[5] | -1.4, 0.2);
  target += normal_lpdf(b[6] | -1.4, 0.2);
  target += normal_lpdf(b[7] | 0, 0.2);
  target += normal_lpdf(b[8] | 0, 0.2);
  target += normal_lpdf(b[9] | 0, 0.2);
  target += normal_lpdf(b[10] | 0, 0.2);
  target += normal_lpdf(b[11] | 0, 0.2);
  target += normal_lpdf(b[12] | 0, 0.2);
  target += cauchy_lpdf(sigma | 0, 0.4)
    - 1 * cauchy_lccdf(0 | 0, 0.4);
  target += normal_lpdf(Intercept_ndt | -1, 0.5);
  target += cauchy_lpdf(sd_1 | 0, 0.1)
    - 1 * cauchy_lccdf(0 | 0, 0.1);
  target += std_normal_lpdf(z_1[1]);
  target += student_t_lpdf(sd_2 | 3, 0, 2.5)
    - 1 * student_t_lccdf(0 | 3, 0, 2.5);
  target += std_normal_lpdf(z_2[1]);
}
generated quantities {
  // actual population-level intercept
  real b_ndt_Intercept = Intercept_ndt;
}
      ", "stan_model1.stan")

stan_model1 <- "stan_model1.stan"
d_data <- make_standata(test_formula, d)

fit <- stan(file = stan_model1, data = d_data, warmup = 500, iter = 1000, chains = 4, cores = 2, thin = 1)
