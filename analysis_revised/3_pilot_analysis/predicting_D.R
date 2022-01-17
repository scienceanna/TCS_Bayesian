library(tidyverse)
library(brms)
library(tidybayes)

options(mc.cores = parallel::detectCores())
source("get_slopes_fun.R")

m1 <- readRDS("pilot1.model")
samples1 <- get_slopes(m1, 1) %>% select(-observer, -rD) %>% distinct()

m2 <- readRDS("pilot2.model") 
samples2 <- get_slopes(m2, 1) %>% select(-observer, -rD) %>% distinct()


calc_D <- function(feature1, feature2) {
  
  D1 <- filter(samples1, feature == feature1)$D
  D2 <- filter(samples1, feature == feature2)$D
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(.draw = 1:2000,
                feature1 = feature1, feature2 = feature2,
                D_collinear = D_collinear,
                D_best_feature = D_best_feature,
                D_orth_contrast = D_orth_contrast))
  
}


things_to_calc <- samples2 %>% select( -D, -.draw) %>%
  distinct() %>%
  separate(feature, c("feature1", "feature2"))


slopes <- pmap_df(things_to_calc, calc_D) %>% full_join(samples2) %>%
  pivot_longer(c(D_collinear, D_best_feature, D_orth_contrast), names_to = "method", values_to = "Dp") %>%
  group_by(feature1, feature2, method) %>%
  summarise(mu = mean(Dp),
            sd = sd(Dp)) %>%
  mutate(method = str_remove(method, "D_"),
         slope = paste0("feature", feature1, "_", feature2, ":lnd"))


#######################################################################
#### now use this to predict reaction times in double feature condition
#######################################################################

fit_pred_model <- function(meth) {
  
  my_f <- bf(rt ~ feature:lnd + (feature:lnd|observer), 
             ndt ~ 1 + (1|observer))
  
  my_inits <- list(list(Intercept_ndt = -10),list(Intercept_ndt = -10),list(Intercept_ndt = -10),list(Intercept_ndt = -10))
  
  # take intercept from m1
  intercept_mu <- fixef(m1)["Intercept", 1]
  intercept_sd <- fixef(m1)["Intercept", 2]
  
  # take ndt from m1
  ndt_int_mu <- fixef(m1)["ndt_Intercept", 1]
  ndt_int_sd <- fixef(m1)["ndt_Intercept", 2]
  
  # take all sd and wotnot from m1
  sigma_mean <-  VarCorr(m1)$residual$sd[1]
  sigma_sd   <-  VarCorr(m1)$residual$sd[2]
  
  sd_mean <- VarCorr(m1)$observer$sd[1,1]
  sd_sd <- VarCorr(m1)$observer$sd[1,2]
  
  sd_ndt_mean <- VarCorr(m1)$observer$sd[2,1]
  sd_ndt_sd <- VarCorr(m1)$observer$sd[2,2]
  
  # use our predicted slopes!
  slopes_mu <-  filter(slopes, method == meth)$mu
  slopes_sd <-  filter(slopes, method == meth)$sd
  slope <- filter(slopes, method == meth)$slope
  
  my_prior <-  c(
    prior_string(paste("normal(", intercept_mu, ",",  intercept_sd, ")", sep = ""), class = "Intercept"),
    prior_string(paste("normal(", slopes_mu, ",",  slopes_sd, ")", sep = ""), class = "b", coef = slope),
    prior_string(paste("normal(", sigma_mean, ",", sigma_sd, ")", sep = ""), class = "sigma"),
    prior_string(paste("normal(", sd_mean, ",", sd_sd, ")", sep = ""), class = "sd"),
    prior_string(paste("normal(",ndt_int_mu, ", ", ndt_int_sd, ")"), class = "Intercept", dpar = "ndt" ),
    prior_string(paste("normal(",sd_ndt_mean,",", sd_ndt_sd,")"), class = "sd", dpar = "ndt"))
  
  stanvars <- stanvar(sigma_mean, name='sigma_mean') + 
    stanvar(sigma_sd, name='sigma_sd') + 
    stanvar(sd_mean, name='sd_mean') + 
    stanvar(sd_sd, name='sd_sd')
  
  
  
  
  # now run model
  m <- brm(
    my_f, 
    data = d2,
    family = brmsfamily("shifted_lognormal"),
    prior = my_prior,
    chains = 4,
    sample_prior = "only",
    iter = 5000,
    inits = my_inits,
    stanvars = stanvars,
    save_pars = save_pars(all=TRUE),
    silent = TRUE
  )
  
  return(m)
}


source("pre_process_pilot.R")

d2 <- d2 %>% unite(feature, feature1, feature2)

m_collinear <- fit_pred_model("collinear")
m_orth_contrast <- fit_pred_model("orth_contrast")
m_best_feature <- fit_pred_model("best_feature")


bs_bfeat <- bridge_sampler(m_best_feature, silent = TRUE)
bs_orth <- bridge_sampler(m_orth_contrast, silent = TRUE)
bs_col <- bridge_sampler(m_collinear, silent = TRUE)

post_prob(bs_bfeat, bs_orth, bs_col)
