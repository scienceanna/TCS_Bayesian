source("../scripts/import_and_tidy.R")
summary(d)
options(mc.cores = 4)

d3 <- filter(d, str_detect(exp_id, "3a")) %>%
  group_by(exp_id, p_id, d_feature, N_T, ring) %>%
  summarise(mean_rt = mean(rt), .groups = "drop") %>%
  mutate(d_feature = fct_drop(d_feature))
  
## Ring model

library(brms)

intercepts = paste("d_feature", str_replace(unique(d3$d_feature), " ", ""), sep = "")

my_prior <- c(
  prior_string("normal(0, 50)", class = "b"),
  prior_string("normal(500, 100)", class = "b", coef = intercepts),
  prior_string("normal(0, 50)", class = "sigma"))

# ring model
m <- brm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature:ring, 
         data = d3, 
         prior = my_prior,
         iter = 500, 
         chains = 1,
         refresh = 0)

# no ring model
m2 <- brm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, 
         data = d3, 
         prior = my_prior,
         iter = 500, 
         chains = 1,
         refresh = 0)


m <- bridge_sampler(m)
m2 <- bridge_sampler(m2)

post_prob(m, m2)


