library( brms)
library(tidybayes)
my_models <- readRDS("my.models")
source("import_and_tidy.R")
source("reimplementation.R")

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

df %>% modelr::data_grid(d_feature = levels(df$d_feature), N_T = 1:30) %>%
  add_predicted_draws(m2) %>%
  mean_hdci() %>%
  ggplot(aes(x = N_T , y = .prediction, ymin = .lower, ymax = .upper, fill = d_feature, colour = d_feature)) + 
  geom_ribbon(alpha = 0.3) + geom_path()
