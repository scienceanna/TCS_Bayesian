library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(bridgesampling)
library(ggridges)


m <- readRDS("exp1_ring_more_random.model")

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

d1 %>% modelr::data_grid(feature, ring, lnd = seq(0, 3.5, 0.1)) %>%
  add_epred_draws(m, ndraws = 100, re_formula = NA) -> pred


ggplot(pred, aes(x = lnd, y = .epred, colour = ring, group = .draw)) +
  geom_path(alpha = 0.1) + 
  facet_wrap(~feature) +
  ggthemes::scale_color_ptol()

ggsave("../../plots/ring_single_feature.pdf", width = 8, height = 4)

