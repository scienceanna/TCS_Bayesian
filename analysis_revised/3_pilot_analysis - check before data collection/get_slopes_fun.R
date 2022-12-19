get_slopes <- function(m, num_features) {

ff <- str_subset(get_variables(m), "b_[a-z_1]*:")
rf <- str_subset(get_variables(m), "r_observer\\[.*:")

samples_rf <- as_draws_df(m, rf, 
                          add_chain = TRUE, 
                          subset =sample(1:nsamples(m), n_draws = 100)) %>%
  pivot_longer(-c(".chain", ".iteration", ".draw"), names_to = "feature", values_to = "rD")  %>% 
  separate(feature, into = c("observer", "feature"), sep = ",")

if (num_features == 1) { 
  samples_rf %>%
  mutate(observer = parse_number(observer),
         feature = str_remove(feature, "feature"),
         feature = str_remove(feature, ":lnd]")) -> samples_rf
    
} else {
  
  samples_rf %>%
    separate(feature, into = c("feature1", "feature2", "lnd"), sep = ":" ) %>%
    mutate(observer = parse_number(observer),
           feature1 = str_remove(feature1, "feature1"),
           feature2 = str_remove(feature2, "feature2")) %>%
      select(-lnd) -> samples_rf
    
}
    
samples_rf %>% select(-.iteration, -.chain) -> samples_rf

samples_ff <- as_draws_df(m, ff, 
                          add_chain = TRUE, 
                          subset =sample(1:nsamples(m), n_draws = 100)) %>%
  pivot_longer(-c(".chain", ".iteration", ".draw"), names_to = "feature", values_to = "D") %>%
  mutate(feature = str_remove(feature, "b_feature"),
         feature = str_remove(feature, ":lnd")) %>%
  select(-.iteration, -.chain)

if (num_features == 2) {
  samples_ff %>% separate(feature, into = c("feature1", "feature2"), sep = ":") %>%
    mutate(feature1 = str_remove(feature1, "1"),
           feature2 = str_remove(feature2, "feature2")) -> samples_ff
}

samples <- full_join(samples_ff, samples_rf) %>%
  mutate(rD = D + rD)

return(samples)

}
