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
samples1 <- get_slopes(m1, rings = TRUE, fixed = FALSE)
samples2 <- get_slopes(m2, num_features = 2, rings = TRUE, fixed = FALSE)  


#########
# Look at how well we can predict Dcs per person

calc_D <- function(ring, feature1, feature2, observer) {
  
  obs <- observer
  rn <- ring
  
  D1 <- filter(samples1, feature == feature1, ring == rn, observer == obs)$D
  D2 <- filter(samples1, feature == feature2, ring == rn, observer == obs)$D
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(.draw = 1:length(unique(samples1$.draw)),
                observer = obs,
                ring = rn,
                feature = paste(feature1, feature2, sep = "_"),
                feature1 = feature1, feature2 = feature2,
                collinear = D_collinear,
                `best feature` = D_best_feature,
               `orthogonal contrast` = D_orth_contrast,
               ))
}


things_to_calc <- samples2 %>% select( -D, -.draw) %>% 
  distinct()


slopes <- pmap_df(things_to_calc, calc_D) %>% 
  full_join(samples2, by = c("observer", "ring", ".draw", "feature1", "feature2")) %>%
  pivot_longer(c(collinear, `best feature`, `orthogonal contrast`), names_to = "method", values_to = "Dp")


slopes %>% 
  group_by(observer, method, ring, feature ) %>%
  summarise(De = median(D), 
            Dp = median(Dp), 
            .groups = "drop") -> slopes_summary

ggplot(slopes_summary, aes(Dp, De, colour = method)) + 
  geom_point(alpha = 0.2) +
  geom_smooth(method = lm, alpha = 0.5) +
  geom_abline(linetype = 2) + 
  facet_wrap(~ring) + 
  ggthemes::scale_color_ptol()


rm(samples1, samples2)


########### recalc slopes and don't summarise yet


compute_rt_predictions <- function(slopes, meth) { 
  
  df <- d2 %>% unite(feature, feature1, feature2) 
  
  slopes %>% 
    filter(method == meth) %>% 
    group_by(observer, ring,  feature) %>% 
    summarise(mu = mean(Dp), sigma = sd(Dp), .groups = "drop") %>% 
    mutate( 
      d_feature = as_factor(feature), 
      method = meth,
      observer = if_else(observer<10, paste0("0", observer), as.character(observer))) -> Dp_summary 
  
  # ,
  # observer = if_else(observer<10, paste0("0", as.character(observer)),
  #                    as.character(observer))
  
  # now define and run new model!  
  
  my_f <- brms::bf(rt ~ 0 + ring:observer + observer:ring:feature:lnd,  
                   ndt ~ 0:observer) 
  
  my_inits <- list(list(Intercept_ndt = -10)) 
  
  intercept_mu <- round(c(ranef(m1)$observer[, 1, 1], 
                          ranef(m1)$observer[, 1, 2], 
                          ranef(m1)$observer[, 1, 3]), 4)
                        
  intercept_sd <- round(c(ranef(m1)$observer[, 2, 1], 
                          ranef(m1)$observer[, 2, 2], 
                          ranef(m1)$observer[, 2, 3]), 4)
  
  
  intercept_names <- c(paste0("ring1:observer", unique(d1$observer)),
                       paste0("ring2:observer", unique(d1$observer)),
                       paste0("ring3:observer", unique(d1$observer)))
                       
 
  sigma_mean <-  VarCorr(m1)$residual$sd[1] 
  sigma_sd   <-  VarCorr(m1)$residual$sd[2] 
  
  sd_mean <- VarCorr(m1)$observer$sd[1,1] 
  sd_sd <- VarCorr(m1)$observer$sd[1,2] 
  
  sd_ndt_mean <- VarCorr(m1)$observer$sd[2,1] 
  sd_ndt_sd <- VarCorr(m1)$observer$sd[2,2] 
  
  slopes_str <- paste0("ring", Dp_summary$ring, ":observer", Dp_summary$observer, ":feature", Dp_summary$feature, ":lnd")
  slopes_mu <- round(Dp_summary$mu,4)  
  slopes_sd <- round(Dp_summary$sigma, 4)  
  
  my_prior <-  c( 
    prior_string(paste("normal(", intercept_mu, ",",  intercept_sd, ")", sep = ""), class = "b", coef = intercept_names), 
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
    iter = 200000,
    init = my_inits, 
    stanvars = stanvars, 
    save_pars = save_pars(all=TRUE), 
    silent = TRUE, 
    sample_prior = "only", 
    refresh = 0,
    backend = "cmdstan"
  ) 
  
  return(m_prt) 
} 


m_col <- compute_rt_predictions(slopes, "collinear") 
saveRDS(m_col, "pred_ring_obs_col.model")
m_col <- readRDS("pred_ring_obs_col.model")
m_colbs <- bridge_sampler(m_col, silent = TRUE, maxiter = 20000) 
rm(m_col)

m_bfe <- compute_rt_predictions(slopes, "best feature") 
saveRDS(m_bfe, "pred_ring_obs_bfe.model")
m_bfe <- readRDS("pred_ring_obs_bfe.model")
m_bfebs <- bridge_sampler(m_bfe, silent = TRUE, maxiter = 5000) 
rm(m_bfe)

m_orc <- compute_rt_predictions(slopes, "orthogonal contrast") 
saveRDS(m_orc, "pred_ring_obs_orc.model")
m_orcbs <- bridge_sampler(m_orc, silent = TRUE) 
rm(m_orc)


rm(m1, m2, samples1, samples2, slopes, slopes_summary)


tibble(model = c("collinear", "best feature", "orthogonal contrast"), 
       `posterior probability` = post_prob(m_colbs, m_bfebs, m_orcbs)) %>% 
  knitr::kable() 



rm(m1, m2, slopes, dstim, samples1, samples2, slopes_summary, things_to_calc)

### plot model
m <- readRDS("pred_ring_obs_col.model")

d2 %>% unite(feature, feature1, feature2) -> d2

d2 %>% modelr::data_grid(observer=c("01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
                                    "11", "12", "13", "14", "15", "16", "17", "18", "20",
                                    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
                                    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"), 
                         ring, lnd, feature) %>%
  add_predicted_draws(m, re_formula = NA, ndraws = 100, value = "rt") %>%
  group_by(ring, lnd, feature) %>%
  select(-.row, -.chain, -.iteration) %>%
  median_hdci(rt) -> dp

ggplot(dp, aes(x = lnd, y = rt, colour = ring)) + geom_path() +
  facet_wrap(~feature)




