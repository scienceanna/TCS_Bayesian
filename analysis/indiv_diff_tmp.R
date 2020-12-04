library(tidyverse)
library(brms)
# rename participants to pretend that we have a between subjects measure!


source("scripts/import_and_tidy.R")
source("scripts/our_functions.R")


d %>% 
  select(-exp_id) %>% 
  separate(p_id, c("exp_id", "p_id"), "-") %>%
  mutate(p_id = paste(p_id, exp_id)) -> d

dr <- map_dfr(unique(d$exp_id), rank_order_people, shuffle_noise = 0.25) 

d <- left_join(d,dr)

#d %>% group_by(ps_id, exp_id) %>% summarise(m_rt = median(rt)) %>% 
#  pivot_wider(names_from = "exp_id", values_from = "m_rt") %>%
#  ggplot(aes(x = `1a`, y = `1b`)) + geom_point()


## Running the model the hacky way

d %>%
  filter(exp_id == "1a" | exp_id == "1b") %>%
  group_by(p_id, d_feature, N_T) %>%
  mutate(
    d_feature = fct_drop(d_feature),
    p_id = fct_drop(p_id)) -> df

my_f <- bf(rt ~ 1 + log(N_T+1):d_feature + (log(N_T+1):d_feature|ps_id),
           ndt ~ 1 + (1|ps_id))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))

#list of variables/coefs that we want to define priors for:
intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
intercepts <- gsub("[[:space:]]", "", intercepts)
slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
slopes <- gsub("[[:space:]]", "", slopes)

my_prior <- c(
  #prior_string("normal(-1.4, 0.2)", class = "b", coef = intercepts),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))

n_chains = 4
n_itr = 5000

m <- brm(
  my_f, data = df,
  family = brmsfamily("shifted_lognormal"),
  prior = my_prior,
  chains = n_chains,
  iter = n_itr,
  inits = my_inits,
  save_pars = save_pars(all=TRUE)
)

saveRDS(m, "models/exp_2_sft_power_shuffle_sample.models")
