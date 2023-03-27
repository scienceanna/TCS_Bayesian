# this script does essentially the same as 3
# recreates figures for exporting to paper (or talks)
library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)
library(ggpmisc)
library(bridgesampling)

# set ggplot2 theme
theme_set(theme_bw())

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# reduce the number of decimal places
options(digits = 3)

# functions used for our Bayesian re-analysis
source("../scripts/our_functions.R")

# set seed to make sure everything is reproducible 
set.seed(100320021)


## Import and Remove Outliers 

source("1_pre_process_data.R")


## Plotting prior predictions


m1b <- readRDS("exp1_prior.model")
source("get_slopes_fun.R")


samples1b <- get_slopes(m1b, 1) %>% select(-observer, -rD) %>% distinct()

colourPalette <- c("#e78429", "#ed968c", "#7c4b73","#aadce0", "#72bcd5", "528fad")

samples1b %>% mutate(feature_type = if_else(
  feature %in% c("purple", "orange", "pink"), "colour", "shape")) %>%
  ggplot(aes(D, fill = feature)) + 
  geom_density(alpha = 0.33) + 
  facet_wrap(~feature_type) +
  scale_fill_manual(values=colourPalette, limits = c("orange", "pink","purple", "circle", "diamond", "triangle"))


m_sft <- readRDS("exp1.model")

d1 %>% group_by(feature, lnd, observer) %>%
  summarise(median_rt = median(rt)) %>%
  summarise(mean_median = median(median_rt)) -> d_mean

d1 %>% modelr::data_grid(feature, lnd= seq(-1, 4, length.out = 25)) %>%
  add_predicted_draws(m_sft, re_formula = NA) %>%
  mean_hdci(.width = c(0.53, 0.97)) %>%
  ggplot(aes(lnd)) +
  geom_jitter(data = d1%>% sample_frac(0.1), aes(y = rt), colour = "black", alpha = 0.1) + 
  geom_ribbon(aes(ymin = .lower, ymax = .upper, group = .width), alpha = 0.3, fill = "purple") + 
  coord_cartesian(xlim = c(-0.5, 3.75), ylim = c(0.4, 2)) + 
  facet_wrap(~feature, nrow = 1) +
  scale_x_continuous("log(number of distracters)")-> d1_sft

ggsave("../../plots/sft_ln_model.pdf", d1_sft, width = 8, height = 2)


## Hypothesis 2

# Hypothesis 3


source("get_slopes_fun.R")

m1 <- readRDS("exp1.model")
samples1 <- get_slopes(m1, 1) %>% select(-observer, -rD) %>% distinct()

samples1 %>% group_by(feature) %>% 
  median_hdci(D) %>%
  select(feature, D, .lower, .upper) %>%
  knitr::kable() 
# circle, diamond, orange, pink, purple, triangle
colourPalette <- c("#e78429", "#ed968c", "#7c4b73","#aadce0", "#72bcd5", "528fad")

# export figure for manuscript
samples1 %>% mutate(feature_type = if_else(
  feature %in% c("purple", "orange", "pink"), "colour", "shape")) %>%
  ggplot(aes(D, fill = feature)) +
  geom_density(alpha = 0.33) +
  facet_wrap(~feature_type) +
  scale_fill_manual(values=colourPalette,  limits = c("orange", "pink","purple", "circle", "diamond", "triangle")) + 
  xlab(expression(D[c] ~ and ~ D[s])) + 
  theme(axis.text.x =  element_text(size = 8)) -> pltDi


m2 <- readRDS("exp2_random.model")
samples2 <- get_slopes(m2, 1) %>% select(-observer, -rD) %>% distinct()

colourPalette2 <- c("#e78429", "#ed968c", "#7c4b73")

samples2 %>% separate(feature, into = c("colour", "shape")) %>%
  ggplot(aes(D, fill = colour)) +
  geom_density(alpha = 0.33) +
  facet_grid(.~shape, scales = "free") +
  theme_bw() + 
  scale_fill_manual(values=colourPalette2)+
  xlab(expression(D[c~s])) +
  theme(axis.text.x =  element_text(size = 8))-> pltDcs

ggsave("../../plots/Dcs.pdf", pltDi + pltDcs + plot_layout(widths = c(3,4)), width = 8, height = 2)


# Hypothesis 4


calc_D <- function(feature1, feature2) {
  
  D1 <- filter(samples1, feature == feature1)$D
  D2 <- filter(samples1, feature == feature2)$D
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(.draw = 1:4000,
                feature = paste(feature1, feature2, sep = "_"),
                feature1 = feature1, feature2 = feature2,
                collinear = D_collinear,
                `best feature` = D_best_feature,
                `orthogonal contrast` = D_orth_contrast))
  
}


things_to_calc <- samples2 %>% select( -D, -.draw) %>% 
  distinct() %>% 
  separate(feature, c("feature1", "feature2")) 

slopes <- pmap_df(things_to_calc, calc_D) %>% full_join(samples2, by = c(".draw", "feature")) %>% 
  pivot_longer(c(collinear, `best feature`, `orthogonal contrast`), names_to = "method", values_to = "Dp") %>% 
  select(-feature) %>% 
  pivot_longer(c(D, Dp), names_to = "type", values_to = "D") %>% 
  group_by(feature1, feature2, method, type) 

slopes %>% 
  median_hdci(D) %>% 
  unite(D, D, .lower, .upper) %>% 
  select(-.width, -.point, -.interval) %>% 
  pivot_wider(names_from = "type", values_from = "D") %>% 
  separate(D, into = c("De", "De_min", "De_max"), sep = "_", convert = TRUE) %>% 
  separate(Dp, into = c("Dp", "Dp_min", "Dp_max"), sep = "_", convert=  TRUE) %>% 
  ggplot(aes(x = Dp, xmin = Dp_min, xmax = Dp_max, y = De, ymin = De_min, ymax = De_max)) + 
  geom_point() + 
  geom_errorbar(alpha = 0.5, colour = "black") + 
  geom_errorbarh(alpha = 0.5, colour = "black") + 
  geom_abline(linetype = 2) + 
  geom_smooth(method = "lm", fullrange  = T, colour = "violetred3", fullrange=TRUE) + 
  stat_poly_eq(formula = y ~ x, 
               aes(label = paste(..eq.label.., ..rr.label.., sep = "*plain(\",\")~")), 
               parse = TRUE, size = 2.8, label.y = 0.9, coef.digits = 3,rr.digits = ) + 
  facet_wrap(~method, scales = "free") +
  scale_x_continuous(expression(D[p]), expand = c(0,0)) + 
  scale_y_continuous(expression(D[c~s]), expand = c(0,0))

ggsave("../../plots/Dpe.pdf", width = 8, height = 3)



