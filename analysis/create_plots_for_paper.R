library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(magrittr)

# set ggplot2 theme
theme_set(see::theme_lucid())

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# functions used for the analysis reimplementation
source("scripts/reimplementation.R")

# functions used for our Bayesian re-analysis
source("scripts/our_functions.R")

source("scripts/import_and_tidy.R")

###################################################
## Computational Replication of Buetti et al (2019)
###################################################
De <- map_dfr(unique(d$exp_id), calc_D_per_feature)
Dp <- map_df(c(2,4), gen_exp_predictions, De)

## Create summary of results for paper
left_join(Dp, De, by = c("exp_id", "d_feature")) %>%
  pivot_longer(
    cols = c(`best feature`, `orthog. contrast`, collinear),
    values_to = "Dp",
    names_to = "method") %>%
  mutate(method = fct_relevel(method, "best feature", "orthog. contrast")) %>%
  filter(method == "collinear") %>%
  ggplot(aes(x = Dp, y = D)) +
  geom_point( color = "darkblue", alpha = 0.5) + 
  geom_abline(linetype = 2) +
  geom_smooth(method = "lm", formula = y ~ x, colour = "violetred3") + 
  scale_x_continuous("predicted D") + 
  scale_y_continuous("empirical D")  + 
  coord_fixed()-> plt_D

exps2predict = c(2, 4)

rt_pred <- map_dfr(exps2predict, predict_rt)

d %>% filter(exp_id %in% exps2predict) %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  summarise(mean_rt = mean(rt), .groups = "drop") %>%
  group_by(exp_id,  d_feature, N_T) %>%
  summarise(mean_rt = mean(mean_rt), .groups = "drop") %>%
  left_join(rt_pred, by = c("exp_id", "d_feature", "N_T")) %>% 
  ggplot(aes(x = p_rt, y = mean_rt)) + 
  geom_point(color = "darkblue", alpha = 0.5) + 
  geom_abline(linetype = 2) +
  geom_smooth(method = "lm", formula = y ~ x, colour = "violetred3") + 
  scale_x_continuous("predicted reaction time (sec)") +
  scale_y_continuous("empirical mean reaction time (sec)") + 
  coord_fixed() -> plt_mean_rt

rt_pred <- map_dfr(exps2predict, predict_rt)

d %>% filter(exp_id %in% exps2predict) %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  sample_n(1) %>%
  left_join(rt_pred, by = c("exp_id", "d_feature", "N_T")) %>% 
  ggplot(aes(x = p_rt, y = rt)) + 
  geom_point(color = "darkblue", alpha = 0.15) + 
  geom_abline(linetype = 2) +
  geom_smooth(method = "lm", formula = y ~ x, colour = "violetred3") + 
  scale_x_continuous("predicted reaction time (sec)") +
  scale_y_continuous("sampled reaction time (sec)") -> plt_sample_rt

ggsave("../plots/computational_replication.pdf", plt_D + plt_mean_rt + plt_sample_rt, width = 8, height = 3)


###################################################
## Bayesian RT fits
###################################################

m_exp1_sft <- readRDS("models/exp_1_sft.models")
plt_bayes_fit1 <-plot_model_fits_rt(1, m_exp1_sft, plot_type = "fitted", y_limits = c(0.4, 1.2), dot_col = 'darkblue', n_row = 1)
plt_bayes_pred1 <-plot_model_fits_rt(1, m_exp1_sft, plot_type = "predicted", y_limits = c(0, 2),dot_col = 'darkblue', n_row = 1)

ggsave("../plots/bayes_buetti_refit.pdf", plt_bayes_fit1 / plt_bayes_pred1, width = 8, height = 6)
