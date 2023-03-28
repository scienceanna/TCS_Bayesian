# this script looks at the individual differnces: is there a corelation between
# D in different conditions?

library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)
library(ggpmisc)
library(bridgesampling)

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

m1 <- readRDS("exp1_ring.model")
m2 <- readRDS("exp2_ring.model")

# first, calculate slopes
samples1 <- get_slopes(m1, 1, fixed = F)
samples2 <- get_slopes(m2, 1, fixed = F) 




#########
# Look at how well we can predict Dcs per person

calc_D <- function(feature1, feature2, observer) {
  
  obs <- observer
  D1 <- filter(samples1, feature == feature1, observer == obs)$rD
  D2 <- filter(samples1, feature == feature2, observer == obs)$rD
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(.draw = 1:4000,
                observer = obs,
                feature = paste(feature1, feature2, sep = "_"),
                feature1 = feature1, feature2 = feature2,
                collinear = D_collinear,
                `best feature` = D_best_feature,
               `orthogonal contrast` = D_orth_contrast,
               ))
}


things_to_calc <- samples2 %>% 
  select(-.draw, -rD) %>%
  distinct() %>% 
  separate(feature, c("feature1", "feature2")) 


slopes <- pmap_df(things_to_calc, calc_D) %>% 
  full_join(samples2, by = c("observer", ".draw", "feature")) %>%
  pivot_longer(c(collinear, `best feature`, `orthogonal contrast`), names_to = "method", values_to = "Dp") %>% 
  group_by(observer, method, feature ) %>%
  summarise(De = median(rD), 
            Dp = median(Dp))

ggplot(slopes, aes(Dp, De, colour = method)) + geom_point() +
  geom_smooth(method = lm, alpha = 0.25) +
  geom_abline(linetype = 2) + 
  facet_wrap(~observer, nrow = 3)


comp_corr <- function(obs, meth) {
  df <- filter(slopes, observer == obs, method == meth)
  
  r <- cor(df$De, df$Dp)
  return(r)
  
}


r_col <- map_dbl(1:40, comp_corr, "collinear")
r_bfe <- map_dbl(1:40, comp_corr, "best feature")
r_oth <- map_dbl(1:40, comp_corr, "orthogonal contrast")


tibble(method = rep(c("collinear", "best feature", "orthogonal contrast"), 
                    each=40),
                r = c(r_col, r_bfe, r_oth)) %>%
  ggplot(aes(r, fill = method)) + geom_histogram(alpha = 0.5, position=position_identity())


########### recalc slopes and don't summarise yet

# first fix observer variable in slopes


slopes <- pmap_df(things_to_calc, calc_D) %>% 
  full_join(samples2, by = c("observer", ".draw", "feature")) %>%
  pivot_longer(c(collinear, `best feature`, `orthogonal contrast`), names_to = "method", values_to = "Dp")

 slopes %>% mutate(observer = if_else(observer %in% c(1, 4,5,6,7,8,9),
                                      paste0("0", as.character(observer)), 
                                      as.character(observer))) -> slopes

m1 <- readRDS("exp1.model")

compute_rt_predictions <- function(slopes, meth) { 
  
  df <-  d2 %>% unite(feature, feature1, feature2)
  
  slopes %>% 
    filter(method == meth) %>% 
    group_by(observer, feature) %>% 
    summarise(mu = mean(Dp), sigma = sd(Dp), .groups = "drop") %>% 
    mutate( 
      d_feature = as_factor(feature), 
      method = meth) -> Dp_summary 
  
  # ,
  # observer = if_else(observer<10, paste0("0", as.character(observer)),
  #                    as.character(observer))
  
  # now define and run new model!  
  
  my_f <- brms::bf(rt ~ 1 + observer:feature:lnd,  
                   ndt ~0:observer) 
  
  my_inits <- list(list(Intercept_ndt = -10)) 
  
  
  intercept_mu <- fixef(m1)["Intercept", 1] 
  intercept_sd <- fixef(m1)["Intercept", 2] 
  
  ndt_int_mu <- fixef(m1)["ndt_Intercept", 1] 
  ndt_int_sd <- fixef(m1)["ndt_Intercept", 2] 
  
  
  sigma_mean <-  VarCorr(m1)$residual$sd[1] 
  sigma_sd   <-  VarCorr(m1)$residual$sd[2] 
  
  sd_mean <- VarCorr(m1)$observer$sd[1,1] 
  sd_sd <- VarCorr(m1)$observer$sd[1,2] 
  
  sd_ndt_mean <- VarCorr(m1)$observer$sd[2,1] 
  sd_ndt_sd <- VarCorr(m1)$observer$sd[2,2] 
  
  slopes_str <-paste0("observer", Dp_summary$observer,  ":feature", Dp_summary$feature, ":lnd") 
  slopes_mu <-round(Dp_summary$mu,4)  
  slopes_sd <-round(Dp_summary$sigma, 4)  
  
  my_prior <-  c( 
    prior_string(paste("normal(", intercept_mu, ",",  intercept_sd, ")", sep = ""), class = "Intercept"), 
    prior_string(paste("normal(", slopes_mu, ",",  slopes_sd, ")", sep = ""), class = "b", coef = slopes_str), 
    prior_string(paste("normal(", sigma_mean, ",", sigma_sd, ")", sep = ""), class = "sigma")) 
    #prior_string(paste("normal(", sd_mean, ",", sd_sd, ")", sep = ""), class = "sd"), 
    #prior_string(paste("normal(",ndt_int_mu, ", ", ndt_int_sd, ")"), class = "Intercept", dpar = "ndt" ))
    #prior_string(paste("normal(",sd_ndt_mean,",", sd_ndt_sd,")"), class = "sd", dpar = "ndt")) 
  
  stanvars <- stanvar(sigma_mean, name='sigma_mean') +  
    stanvar(sigma_sd, name='sigma_sd') +  
    stanvar(sd_mean, name='sd_mean') +  
    stanvar(sd_sd, name='sd_sd')
  
  get_prior(my_f, df, family = brmsfamily("shifted_lognormal"))
  
  m_prt <- brm( 
    my_f,  
    data = df , 
    family = brmsfamily("shifted_lognormal"), 
    prior = my_prior, 
    chains = 1, 
    iter = 80000, 
    init = my_inits, 
    stanvars = stanvars, 
    save_pars = save_pars(all=TRUE), 
    silent = TRUE, 
    sample_prior = "only", 
    refresh = 0 
  ) 
  
  return(m_prt) 
} 


m_col <- compute_rt_predictions(slopes, "collinear") 
m_bfe <- compute_rt_predictions(slopes, "best feature") 
m_orc <- compute_rt_predictions(slopes, "orthogonal contrast") 


m_colbs <- bridge_sampler(m_col, silent = TRUE) 
m_bfebs <- bridge_sampler(m_bfe, silent = TRUE) 
m_orcbs <- bridge_sampler(m_orc, silent = TRUE) 


tibble(model = c("collinear", "best feature", "orthogonal contrast"), 
       `posterior probability` = post_prob(m_colbs, m_bfebs, m_orcbs)) %>% 
  knitr::kable() 

