library(tidyverse)
# rename participants to pretend that we have a between subjects measure!

rank_order_people <- function(e_id) {
  
  shuffle_noise = 0.025
  
   d %>% filter(exp_id == e_id) %>%
    group_by(p_id) %>%
    summarise(m_rt = median(rt), .groups = 'drop') %>%
    mutate(m_rt = m_rt + rnorm(20, 0, shuffle_noise)) %>%
    arrange(m_rt) %>%
    mutate(ps_id = 1:20) %>%
    select(-m_rt) -> d_out
  
  return(d_out)
}

source("scripts/import_and_tidy.R")

d %>% 
  select(-exp_id) %>% 
  separate(p_id, c("exp_id", "p_id"), "-") -> d

dr <- map_dfr(unique(d$exp_id), rank_order_people) 

d <- left_join(d,dr)

d %>% group_by(ps_id, exp_id) %>% summarise(m_rt = median(rt)) %>% 
  pivot_wider(names_from = "exp_id", values_from = "m_rt") %>%
  ggplot(aes(x = `1a`, y = `1b`)) + geom_point()

