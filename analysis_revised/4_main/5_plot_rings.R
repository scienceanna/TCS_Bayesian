library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(bridgesampling)
library(ggridges)

# set ggplot2 theme
theme_set(theme_bw())

## read in data
source("1_pre_process_data.R")

### first compare ring model to non-ring
m1 <- readRDS("exp1_ring.model")
m0 <- readRDS("exp1.model")

m1 <- bridge_sampler(m1, silent = TRUE) 
m0 <- bridge_sampler(m0, silent = TRUE) 


tibble(model = c("rings", "not rings"), 
       `posterior probability` = post_prob(m1, m0)) %>% 
  knitr::kable() 

rm(m0)



m1 <- readRDS("exp1_ring.model")

m1 %>% gather_draws(`b_.*`, regex=T) %>%
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
  add_epred_draws(m1, ndraws = 100, re_formula = NA) -> pred


ggplot(pred, aes(x = lnd, y = .epred, colour = ring, group = .draw)) +
  geom_path(alpha = 0.1) + 
  facet_wrap(~feature) +
  ggthemes::scale_color_ptol()

ggsave("../../plots/ring_single_feature.pdf", width = 8, height = 4)



# now read in m2 so that we can compute Dp

m2 <- readRDS("exp2_ring.model")
source("get_slopes_fun.R")
samples1 <- get_slopes(m1, 1, TRUE) %>% mutate(feature = str_remove(feature, "feature")) 

samples2 <- get_slopes(m2, 1, TRUE) %>% 
  select(-observer, -rD) %>% 
  distinct() %>%
  mutate(feature = str_remove(feature, "feature"),
         feature1 = str_extract(feature, "orange|pink|purple"),
         feature2 = str_extract(feature, "circle|diamond|triangle"))  

calc_D <- function(ring, feature1, feature2) {
  
  rn = ring
  D1 <- filter(samples1, ring == rn, feature == feature1)$D
  D2 <- filter(samples1, ring == rn, feature == feature2)$D
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(.draw = 1:10000,
                ring = ring,
                feature = paste(feature1, feature2, sep = "_"),
                feature1 = feature1, feature2 = feature2,
                collinear = D_collinear,
                `best feature` = D_best_feature,
                `orthogonal contrast` = D_orth_contrast))
}


things_to_calc <- samples2 %>% select( -D, -.draw) %>% filter(is.finite(ring)) %>%
  select(-feature) %>% distinct()


slopes <- pmap_df(things_to_calc, calc_D) %>% 
  full_join(samples2, by = c(".draw", "feature1", "feature2", "ring")) %>% 
  pivot_longer(c(collinear, `best feature`, `orthogonal contrast`), names_to = "method", values_to = "Dp") %>% 
  select(-feature.x, -feature.y) %>% 
  pivot_longer(c(D, Dp), names_to = "type", values_to = "D") %>% 
  group_by(feature1, feature2, ring,  method, type) %>%
  filter(is.finite(D))



slopes %>% 
  median_hdci(D) %>%
  unite(D, D, .lower, .upper) %>% 
  select(-.width, -.point, -.interval) %>% 
  pivot_wider(names_from = "type", values_from = "D") %>% 
  separate(D, into = c("De", "De_min", "De_max"), sep = "_", convert = TRUE) %>% 
  separate(Dp, into = c("Dp", "Dp_min", "Dp_max"), sep = "_", convert=  TRUE) %>%
  filter(is.finite(ring)) %>% 
  ggplot(aes(x = Dp, xmin = Dp_min, xmax = Dp_max, y = De, ymin = De_min, ymax = De_max, colour = as_factor(ring))) + 
  geom_point() + 
  geom_errorbar(alpha = 0.5) + 
  geom_errorbarh(alpha = 0.5) + 
  geom_abline(linetype = 2) + 
  geom_smooth(method = "lm", fullrange  = T) +
  # stat_poly_eq(formula = y ~ x, 
  #              aes(label = paste(..eq.label.., ..rr.label.., sep = "*plain(\",\")~")), 
  #              parse = TRUE, size = 2.8, label.y = 0.9, coef.digits = 3, rr.digits = 4, colour="blue") + 
  facet_wrap(~method, scales = "free") +
  ggthemes::scale_color_ptol("target ring")

ggsave("../../plots/target_ring_D_pred.pdf",  width = 8, height = 3)

# compute prediction error

slopes  %>% 
  ungroup() %>% 
  pivot_wider(names_from = "type", values_from = "D") %>% 
  mutate(abs_err = abs(D-Dp)) %>% 
  group_by(ring, feature1, feature2, method) %>% 
  summarise(mean_abs_err = mean(abs_err)) %>% 
  pivot_wider(names_from = "method", values_from = "mean_abs_err") %>% 
  ungroup() -> slopes_err 


add_row(slopes_err, ring = 0, feature1 = "sum", feature2 = "over all", 
        `best feature` = sum(slopes_err[4]), 
        collinear = sum(slopes_err[5]), 
        `orthogonal contrast` = sum(slopes_err[6])) %>% 
  knitr::kable() 

slopes  %>% 
  ungroup() %>% 
  pivot_wider(names_from = "type", values_from = "D") %>%
  mutate(ring = as_factor(ring)) -> slopes

summary(lm(D ~ 0 + ring + ring:Dp, 
           data = filter(slopes, method == "best feature")))

summary(lm(D ~ 0 + ring + ring:Dp, 
           data = filter(slopes, method == "collinear")))

summary(lm(D ~ 0 + ring + ring:Dp, 
           data = filter(slopes, method == "orthogonal contrast")))
