library(tidyverse)
# rename participants to pretend that we have a between subjects measure!


source("scripts/import_and_tidy.R")
source("scripts/our_functions.R")


d %>% 
  select(-exp_id) %>% 
  separate(p_id, c("exp_id", "p_id"), "-") %>%
  mutate(p_id = paste(p_id, exp_id)) -> d

dr <- map_dfr(unique(d$exp_id), rank_order_people, shuffle_noise = 0) 

d <- left_join(d,dr)

d %>% group_by(ps_id, exp_id) %>% summarise(m_rt = median(rt)) %>% 
  pivot_wider(names_from = "exp_id", values_from = "m_rt") %>%
  ggplot(aes(x = `1a`, y = `1b`)) + geom_point()

