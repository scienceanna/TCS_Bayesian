library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)
library(ggpmisc)
library(bridgesampling)
library(corrr)
library(ggridges)


m <- readRDS("exp1_ring.model")


m %>% gather_draws(`b_.*`, regex=T) %>%
  select(-.chain, -.iteration) %>% 
  filter(!str_detect(.variable, "ndt")) %>%
  mutate(.variable = str_remove(.variable, "b_"),
         lin_mod_comp = if_else(str_detect(.variable, ":"), "slope", "intercept"),
         ring = as_factor(parse_number(.variable))) -> post

post %>% filter(lin_mod_comp == "slope") %>%
  mutate(feature = str_extract(.variable, "orange|pink|purple|diamond|circle|triangle")) %>%
  ungroup() %>%
  select(-.variable, -lin_mod_comp) -> slopes
         
  
slopes %>% ggplot(aes(.value, fill = ring)) + geom_density(alpha = 0.5) +
  facet_wrap(~feature) +
  ggthemes::scale_fill_ptol()
