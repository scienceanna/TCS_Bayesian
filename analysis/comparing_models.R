library(tidyverse)
library(brms)
library(tidybayes)

my_models_nrl <- readRDS("my_nrl.models")[[1]]
my_models_idt <- readRDS("my_idt.models")[[1]]

my_models_nrl <- add_criterion(my_models_nrl, c("loo", "waic"))
my_models_idt <- add_criterion(my_models_idt, c("loo", "waic"))
model_weights(my_models_idt, my_models_nrl)

# import data (exp 2a only)
source("scripts/import_and_tidy.R")
d <- filter(d, error == 0, rt > 0.01, exp_id == "2a", d_feature != "no distractors") 
d <- mutate(d, d_feature = fct_drop(d_feature))
d %>% mutate(rt = rt/1000) -> d

# This is playing around with tidybayes
d %>%
  group_by(d_feature, p_id) %>%
  data_grid(N_T = seq_range(N_T, n = 101)) %>%
  add_fitted_draws(my_models_nrl) %>%
  ggplot(aes(x = N_T, y = rt, color = d_feature)) +
  stat_lineribbon(aes(y = .value)) +
  geom_jitter(data = d, alpha = 0.1) +
  scale_fill_brewer(palette = "Greys") +
  scale_color_brewer(palette = "Dark2") + 
  facet_grid(~d_feature)

# Just trying to plot the RT distributions

source("scripts/our_functions.R")

samples1 <- posterior_samples(my_models_nrl, "^b")
samples2 <- posterior_samples(my_models_nrl, "^sd_")

ggplot(d, aes(rt, fill = d_feature)) + geom_histogram(alpha = 0.4, position = "identity") + facet_grid(N_T~d_feature)

