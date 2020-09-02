library(tidyverse)

D1 <- seq(0, 0.08, 0.001)
D2 <- D1

tibble(D1, D2) %>% modelr::data_grid(D1, D2) %>%
  mutate(
    D_orth = sqrt(D1^2 + D2^2),
    D_col = 1/((1/D1) + (1/D2))) -> d

d %>%  filter(D2 %in% c(0.01, 0.025, 0.1)) %>% 
  pivot_longer(-c(D1, D2), names_to = "method", values_to = "D_pred") %>%
  ggplot(aes(x = D1, y = D_pred, colour = method)) + geom_point() + facet_wrap(~ D2)

