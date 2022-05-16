source("../scripts/import_and_tidy.R")
summary(d)
options(mc.cores = 4)

d3 <- filter(d, str_detect(exp_id, "3")) %>%
  mutate(rt = rt/1000)

d3 %>% group_by(p_id, N_T, d_feature, exp_id, ring) %>%
  summarise(median_rt = median(rt)) %>%
  ggplot(aes(x = N_T, y = median_rt, colour = ring)) + geom_jitter() +
  geom_smooth() + 
  facet_grid( ~ d_feature)
  

## Ring model

library(brms)

my_prior <- c(
  #prior_string("normal(-0.5, 0.3)",  class = "b", coef = intercepts),
  prior_string("normal(0, 0.2)", class = "b"),
  prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
  prior_string("cauchy(0, 0.4)", class = "sigma"),
  prior_string("cauchy(0, 0.05)", class = "sd"),
  prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))


my_f <- bf(rt ~ 0 + exp_id:ring + d_feature:ring:log(N_T+1) + (1|p_id), 
           ndt ~ 1 + (1|p_id))

my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))


m <- brm(formula = my_f,
         data = d3,
         family = "shifted_lognormal",
         prior = my_prior,
         init = my_inits,
         save_pars = save_pars(all = TRUE))

saveRDS(m,'ring_model.rds')

## Model without a ring

my_f2 <- bf(rt ~ 0 + exp_id + d_feature:log(N_T+1) + (1|p_id), 
           ndt ~ 1 + (1|p_id))

m2 <- brm(formula = my_f2,
         data = d3,
         family = "shifted_lognormal",
         prior = my_prior,
         init = my_inits, 
         save_pars = save_pars(all= TRUE))

saveRDS(m2, 'nonring_model.rds')


####

m <- readRDS('ring_model.rds')
m2 <- readRDS('nonring_model.rds')

m <- bridge_sampler(m, silent = TRUE)
m2 <- bridge_sampler(m2, silent = TRUE)

post_prob(m, m2)