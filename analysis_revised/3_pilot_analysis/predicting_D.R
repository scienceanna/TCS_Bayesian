library(tidyverse)
library(brms)
library(tidybayes)


m1 <- readRDS("pilot1.model")

ff <- str_subset(get_variables(m1), "b_[a-z_1]*:")
rf <- str_subset(get_variables(m1), "r_observer\\[.*:")


samples_rf <- as_draws_df(m1, rf, 
                       add_chain = TRUE, 
                       subset =sample(1:nsamples(m), n_draws = 100)) %>%
  pivot_longer(-c(".chain", ".iteration", ".draw"), names_to = "feature", values_to = "rD") %>%
  separate(feature, into = c("observer", "feature"), sep = ",") %>%
  mutate(observer = parse_number(observer),
         feature = str_remove(feature, "feature"),
         feature = str_remove(feature, ":lnd]")) %>%
  select(-.iteration, -.chain)


ggplot(samples_rf, aes(rD, fill = feature)) + geom_density(alpha = 0.5) + 
  facet_wrap(~observer)



samples_ff <- as_draws_df(m1, ff, 
                          add_chain = TRUE, 
                          subset =sample(1:nsamples(m), n_draws = 100)) %>%
  pivot_longer(-c(".chain", ".iteration", ".draw"), names_to = "feature", values_to = "D") %>%
  mutate(feature = str_remove(feature, "b_feature"),
         feature = str_remove(feature, ":lnd")) %>%
  select(-.iteration, -.chain)


ggplot(samples_ff, aes(D, fill = feature)) + geom_density(alpha = 0.5) 

samples <- full_join(samples_ff, samples_rf) %>%
  mutate(rD = D + rD)

rm(samples_ff, samples_rf)


m2 <- readRDS("pilot2.model") 





samples <- as_draws_df(m, slopes, 
                       add_chain = TRUE, 
                       subset =sample(1:nsamples(m), n_draws = 100))%>%
  pivot_longer(starts_with("b_"), names_to = "d_feature", values_to = "D") %>%
  mutate(
    d_feature = as_factor(d_feature)) %>%
  select(d_feature, D) %>%
  separate(d_feature, c("exp_id", "d_feature", "slope"), sep = ":") %>%
  select(-slope) %>%
  mutate(exp_id = str_extract(exp_id, "1[ab]"),
         d_feature = as_factor(parse_number(d_feature)))

ggplot(samples, aes(x = D, fill = d_feature)) + 
  geom_density(alpha = 0.5) +
  facet_wrap(~exp_id)

```
