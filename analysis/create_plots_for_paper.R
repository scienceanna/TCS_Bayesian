library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)

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
exps_to_predict <- c("2a", "2b", "2c", "4a", "4b", "4c")
De <- map_dfr(unique(d$exp_id), calc_D_per_feature)
Dp <- map_df(exps_to_predict, gen_exp_predictions, De)

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


rt_pred <- map_dfr(exps_to_predict, predict_rt)

d %>% 
  group_by(exp_id, p_id, d_feature, N_T) %>%
  summarise(mean_rt = mean(rt), .groups = "drop") %>%
  group_by(exp_id,  d_feature, N_T) %>%
  summarise(mean_rt = mean(mean_rt), .groups = "drop") %>%
  left_join(rt_pred, by = c("exp_id", "d_feature", "N_T")) %>% 
  ggplot(aes(x = p_rt, y = mean_rt)) + 
  geom_point(color = "darkblue", alpha = 0.5) + 
  geom_abline(linetype = 2) +
  geom_smooth(method = "lm", formula = y ~ x, colour = "violetred3") + 
  scale_x_continuous("predicted rt (sec)") +
  scale_y_continuous("empirical mean rt (sec)") -> plt_mean_rt
  #coord_fixed() -> plt_mean_rt


d %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  sample_n(1) %>%
  left_join(rt_pred, by = c("exp_id", "d_feature", "N_T")) %>% 
  ggplot(aes(x = p_rt, y = rt)) + 
  geom_point(color = "darkblue", alpha = 0.15) + 
  geom_abline(linetype = 2) +
  geom_smooth(method = "lm", formula = y ~ x, colour = "violetred3") + 
  scale_x_continuous("predicted rt (sec)") +
  scale_y_continuous("sampled rt (sec)") -> plt_sample_rt

ggsave("../plots/computational_replication.pdf", plt_D + plt_mean_rt + plt_sample_rt, width = 8, height = 3)



d %>% filter(parse_number(exp_id) == 2,
             d_feature %in% c("blue diamond", "blue triangle", "orange triangle")) %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  summarise(mean_rt = mean(rt), .groups = "drop") %>%
  group_by(exp_id,  d_feature, N_T) %>%
  summarise(mean_rt = mean(mean_rt), .groups = "drop") -> d_mean_mean

rt_pred %>%
  filter(parse_number(exp_id) == 2,
         d_feature %in% c("blue diamond", "blue triangle", "orange triangle")) %>%
  ggplot( aes(x = N_T, y = p_rt)) + 
  geom_line(colour = "violetred3") + 
  facet_wrap( ~ d_feature, nrow = 1) + 
  geom_point(data = d_mean_mean, aes(y = mean_rt), colour = "darkblue" ) + 
  scale_y_continuous("predicted rt (sec)") + 
  scale_x_continuous(TeX("$N_T")) -> plt_rt

ggsave("../plots/computational_replication_rt.pdf", plt_rt, width = 8, height = 3)


###################################################
## Bayesian RT fits
###################################################

# switch from ms to seconds
# recode experiment as 1, 2, 3 and 4 
# remove outlier RTs
d <- our_changes_to_data(d)


m_exp1_sft <- readRDS("models/exp_1_sft.models")
m_exp2_sft <- readRDS("models/exp_2_sft.models")
m_exp3_sft <- readRDS("models/exp_3_sft.models")
m_exp4_sft <- readRDS("models/exp_4_sft.models")

plt_bayes_fit1 <-plot_model_fits_rt(1, m_exp1_sft, plot_type = "fitted", y_limits = c(0.4, 1.2), dot_col = 'darkblue', n_row = 1)
plt_bayes_pred1 <-plot_model_fits_rt(1, m_exp1_sft, plot_type = "predicted", y_limits = c(0, 2),dot_col = 'darkblue', n_row = 1)

ggsave("../plots/bayes_buetti_refit.pdf", plt_bayes_fit1 / plt_bayes_pred1, width = 8, height = 5)


slopes1 <- extract_fixed_slopes_from_model(m_exp1_sft)
slopes2 <- extract_fixed_slopes_from_model(m_exp2_sft)
slopes3 <- extract_fixed_slopes_from_model(m_exp3_sft)
slopes4 <- extract_fixed_slopes_from_model(m_exp4_sft)

ggplot(slopes1, aes(x= D, fill = d_feature)) + 
  geom_density( alpha = 0.33) +
  scale_fill_manual("feature", values = c("royalblue1", "orange1", "gold1", "gray0", "gray40", "gray90")) +
   scale_x_continuous(TeX("posterior distributions for $D_c$ and $D_s$")) + 
  scale_y_continuous(expand = c(0,0)) +
  theme(legend.title = element_blank())-> plt_Di

 Dp_samples <- bind_rows(
  get_Dp_samples(2, d, slopes1, slopes2),
  get_Dp_samples(4, d, slopes3, slopes4))
  
  
Dp_lines <- get_Dp_lines(Dp_samples)
plot_Dp_lines(Dp_lines, dot_col = "darkblue", xyline_col = "darkred") -> plt_Dcs


ggsave("../plots/bayes_buetti_D.pdf", plt_Di / plt_Dcs, width = 8, height = 6)



###################################################
## Bayesian RT Predictions
###################################################
Dp_samples %>%
  group_by(exp_id, d_feature, method) %>%
  summarise(mu = mean(Dp), sigma = sd(Dp), .groups = "drop") %>%
  mutate(d_feature = as_factor(d_feature)) -> Dp_summary

# now define and run new model! 
meth = "collinear"

model_params <- set_up_predict_model(2, "shifted_lognormal", meth, Dp_summary, m_exp1_sft, m_exp2_sft)
m_prt <- run_model(model_params, ppc = "only")

plt_rt_scat <- plot_model_fits_rt(2, m_prt, y_limits = c(0, 1), n_row = 3, plot_type = "fitted", dot_col = "darkblue")
plt_rt_pred <-plot_model_fits_rt(2, m_prt, y_limits = c(0, 1.8), n_row = 3, plot_type = "predicted", dot_col = "darkblue")

ggsave("../plots/bayes_buetti_rt.pdf", plt_rt_scat + plt_rt_pred, width = 8, height = 4)
