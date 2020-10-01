library( brms)
library(tidybayes)

my_models <- readRDS("my.models")
source("import_and_tidy.R")
source("reimplementation.R")
source("our_functions.R")

# remove error trials and very very short responses
df <- filter(d, error == 0, rt > 0.01)

e_id <- "2a"

df %>%
  filter(exp_id == e_id) %>%
  mutate(
    d_feature = fct_drop(d_feature),
    p_id = fct_drop(p_id)) -> df

df <- df %>% filter(d_feature != "no distractors") %>%
  mutate(d_feature = fct_drop(d_feature))

df$d_feature <- as.factor(as.character(df$d_feature))

e_n <- which(unique(d$exp_id) == e_id)


m <- my_models[[e_n]]

intercepts <- paste("d_feature", unique(df$d_feature), sep = "")
intercepts <- gsub("[[:space:]]", "", intercepts)

slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
slopes <- gsub("[[:space:]]", "", slopes)

model_params <-  c(
  prior_string(paste("normal(", summary(m)$fixed[1,1], ",",  summary(m)$fixed[1,2], ")", sep = ""), class = "b", coef = intercepts[1]),
  prior_string(paste("normal(", summary(m)$fixed[2,1], ",",  summary(m)$fixed[2,2], ")", sep = ""), class = "b", coef = intercepts[2]),
  prior_string(paste("normal(", summary(m)$fixed[3,1], ",",  summary(m)$fixed[3,2], ")", sep = ""), class = "b", coef = intercepts[3]),
  prior_string(paste("normal(", summary(m)$fixed[4,1], ",",  summary(m)$fixed[4,2], ")", sep = ""), class = "b", coef = slopes[1]),
  prior_string(paste("normal(", summary(m)$fixed[5,1], ",",  summary(m)$fixed[5,2], ")", sep = ""), class = "b", coef = slopes[2]),
  prior_string(paste("normal(", summary(m)$fixed[6,1], ",",  summary(m)$fixed[6,2], ")", sep = ""), class = "b", coef = slopes[3]),
  prior(normal(0.25, 0.01), class = "sigma"))

# sample from these distributions

m2 <- brm(
  rt ~  0 + d_feature + log(N_T+1):d_feature ,
  data = df,
  family = lognormal(link = "identity"),
  prior = model_params,
  chains = 1,
  sample_prior = "only",
  iter = 5000)

# Getting mean RTs

df_test <- df %>%
  group_by(d_feature, N_T) %>%
  summarise(mean_rt = mean(rt/1000),
            sd_rt = sd(rt/1000))

#df_mod <- df %>%
#  modelr::data_grid(d_feature = levels(df$d_feature), N_T = 1:30) %>%
#  add_predicted_draws(m2) %>%
#  mean_hdci()

df_mod_2 <- df %>%
  modelr::data_grid(d_feature = levels(df$d_feature), N_T = 1:30) %>%
  add_fitted_draws(m2, scale = "response") %>%
  mean_hdci()

ggplot(data = df_mod_2, aes(x = N_T, y = .value, colour = d_feature)) + 
geom_ribbon(aes(ymin = .lower, ymax = .upper, fill = d_feature), alpha = 0.3) + 
  geom_path() +
  geom_jitter(data = df_test, aes(x = N_T, y = mean_rt))



# Predict experiments
De <- map_df(1:length(my_models), extract_fixed_slopes_from_model, my_models, df = d)
Dp <- map_df(c("2a", "2b", "2c", "4a", "4b", "4c"), gen_exp_predictions_b, d)

Dp$d_feature <- Dp$d_feature <- paste("d_feature", Dp$d_feature, ":logN_TP1", sep = "")

# now use Dp rather than De
Dp %>% filter(method == 'collinear', exp_id == "2a") -> Dp

model_params <-  c(
  prior_string(paste("normal(", summary(m)$fixed[1,1], ",",  summary(m)$fixed[1,2], ")", sep = ""), class = "b", coef = intercepts[1]),
  prior_string(paste("normal(", summary(m)$fixed[2,1], ",",  summary(m)$fixed[2,2], ")", sep = ""), class = "b", coef = intercepts[2]),
  prior_string(paste("normal(", summary(m)$fixed[3,1], ",",  summary(m)$fixed[3,2], ")", sep = ""), class = "b", coef = intercepts[3]),
  prior_string(paste("normal(", Dp$mu[1], ",",  Dp$sigma[1], ")", sep = ""), class = "b", coef = Dp$d_feature[1]),
  prior_string(paste("normal(", Dp$mu[2], ",",  Dp$sigma[2], ")", sep = ""), class = "b", coef = Dp$d_feature[2]),
  prior_string(paste("normal(", Dp$mu[3], ",",  Dp$sigma[3], ")", sep = ""), class = "b", coef = Dp$d_feature[3]),
  prior(normal(0.25, 0.01), class = "sigma"))
  


m3 <- brm(
  rt ~  0 + d_feature + log(N_T+1):d_feature ,
  data = df,
  family = lognormal(link = "identity"),
  prior = model_params,
  chains = 1,
  sample_prior = "only",
  iter = 5000)

#Getting mean RTs

df_test <- df %>%
  group_by(d_feature, N_T) %>%
  summarise(mean_rt = mean(rt/1000),
            sd_rt = sd(rt/1000))

#df_mod <- df %>%
#  modelr::data_grid(d_feature = levels(df$d_feature), N_T = 1:30) %>%
#  add_predicted_draws(m2) %>%
#  mean_hdci()

df_mod_2 <- df %>%
  modelr::data_grid(d_feature = levels(df$d_feature), N_T = 1:30) %>%
  add_fitted_draws(m2, scale = "response") %>%
  mean_hdci()

ggplot(data = df_mod_2, aes(x = N_T, y = .value, colour = d_feature)) + 
  geom_ribbon(aes(ymin = .lower, ymax = .upper, fill = d_feature), alpha = 0.3) + 
  geom_path() +
  geom_jitter(data = df_test, aes(x = N_T, y = mean_rt))

