library( brms)
my_models <- readRDS("my.models")
source("import_and_tidy.R")

# remove error trials and very very short responses
df <- filter(d, error == 0, rt > 0.01)

e_id <- "2a"

df %>%
  filter(exp_id == e_id) %>%
  group_by(exp_id, p_id, d_feature, N_T) %>%
  mutate(
    d_feature = fct_drop(d_feature),
    p_id = fct_drop(p_id)) -> df

# df <- account_for_zero_distracters(df)



e_n <- which(unique(d$exp_id) == e_id)


m <- my_models[[e_n]]

intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
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
  prior(student_t(3, 0, 2), class = "sd"))


# sample from these distributions

m2 <- brm(
  rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id),
  data = df,
  family = lognormal(link = "identity"),
  prior = model_params,
  chains = 1,
  sample_prior = "only",
  iter = 5000)

