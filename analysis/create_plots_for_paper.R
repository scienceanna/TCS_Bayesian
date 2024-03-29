# this script basically mirrors the sup mat Rmd, but makes (and formats) the
# figures that we want to include in the main paper. 

library(tidyverse)
library(brms)
library(tidybayes)
library(patchwork)
library(latex2exp)
library(lme4)
library(ggrepel)

# set ggplot2 theme
theme_set(see::theme_lucid())

# use parallel cores for mcmc chains!
options(mc.cores = parallel::detectCores())

# functions used for the analysis re-implementation
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



d %>% filter(parse_number(exp_id) == 2) %>%
             #d_feature %in% c("blue diamond", "blue triangle", "orange triangle")) %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  summarise(mean_rt = mean(rt), .groups = "drop") %>%
  group_by(exp_id,  d_feature, N_T) %>%
  summarise(mean_rt = mean(mean_rt), .groups = "drop") -> d_mean_mean

rt_pred %>%
  filter(parse_number(exp_id) == 2) %>%
         #d_feature %in% c("blue diamond", "blue triangle", "orange triangle")) %>%
  ggplot( aes(x = N_T, y = p_rt)) + 
  geom_line(colour = "violetred3") + 
  facet_wrap( ~ d_feature, nrow = 3) + 
  geom_point(data = d_mean_mean, aes(y = mean_rt), colour = "darkblue" ) + 
  scale_y_continuous("predicted rt (sec)") + 
  scale_x_continuous(TeX("$N_T")) -> plt_rt


calc_D_plot <- function(e_id) {
  
  df <- tibble()
  
  for (col in cs){
    
    Dc = filter(De, d_feature == col, parse_number(exp_id) == e_id)$D
    
    Dss = c(
      filter(De, d_feature == ss[1], parse_number(exp_id) == e_id)$D,
      filter(De, d_feature == ss[2], parse_number(exp_id) == e_id)$D,
      filter(De, d_feature == ss[3], parse_number(exp_id) == e_id)$D)
    
    df <- bind_rows(df, tibble(
      colour = col,
      shape = ss,
      collinear = 1/((1/Dc) + (1/Dss)),
      best_feature = pmin(Dc, Dss),
      orth_contrast =  sqrt(1/((1/Dc^2) + (1/Dss^2)))) %>% 
        mutate(Dc = Dc, Ds = Dss) %>%
        pivot_longer(-c(colour, shape, Ds, Dc), names_to = "method", values_to = "Dp") )
    
  }
  
  # get empirical values for Dcs
  
  d2 <- filter(De, exp_id == e_id+1) %>% separate(d_feature, into = c("colour", "shape")) %>%
    rename(Dcs = "D") %>%
    select(-exp_id) %>% full_join(df)
  
  d2_forlabels <- d2 %>%
    filter(colour == "blue", method == "collinear")
  
  ggplot(d2_forlabels, aes(x  = Ds, y = Dp, colour = method)) + 
    geom_line(data = d2) + geom_point(data = d2) +
    geom_text_repel(aes(label = shape), colour = "black", size = 2) +
    facet_wrap(~ colour, nrow = 3) + 
    #scale_x_continuous(TeX("D_s"), breaks = unique(d2$Ds), label = ss) +
    scale_y_continuous(TeX("D_{c,s}"), limits = c(0,80)) +
    ggthemes::scale_colour_ptol(labels = c("best feature", "collinear", "orthogonal")) + 
    theme(axis.text.x = element_text(angle = 45, vjust = 0.5, hjust=1))-> plt
  
  return(plt)
}

###################################################
## Computational Replication of Buetti et al (2019)
###################################################
De <- map_dfr(unique(d$exp_id), calc_D_per_feature)


# experiment 1 features
cs <- c("orange", "yellow", "blue")
ss <- c("circle", "diamond", "triangle")

plt1 <- calc_D_plot(1)

layout <- "
AAA###
AAABBB
AAA###
"

ggsave("../plots/computational_replication_issues.pdf", plt_rt + plt1 + plot_layout(design = layout), width = 10, height = 6)


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
 
 
# get best possible linear fit of the various methods!
Dp_samples %>% 
   pivot_wider(
     c(exp_id, d_feature, iter, De), 
     names_from = method, values_from = Dp) -> d_lmer
 
# find mle best fit
m_lmer <- lme4::lmer(data = d_lmer, De ~ best_feature + orthog_contrast + collinear + (1|iter))
 
d_lmer %>% 
   mutate(linear_comb = predict(m_lmer)) %>%
   pivot_longer(
     c(best_feature, orthog_contrast, collinear, linear_comb), 
     names_to = "method", 
     values_to = "Dp") %>%
   mutate(method = fct_relevel(method, "linear_comb", after = Inf)) -> Dp_samples
 
rm(d_lmer, m_lmer)

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
