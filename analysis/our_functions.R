# This function calculates the search slopes ($D$), for rt against log($N_T+1$) for a sub-experiment. 

account_for_zero_distracters <- function(df)
{
  # Little helper function to sort out the quirk with N_T = 0
  # i.e, in this case, d_feature is undefined
  # So, well, copy this row three times - once for each value of d_feature
  bind_rows(
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[2]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[3]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[4]),
    filter(df, N_T>0)) %>%
    mutate(d_feature = as_factor(d_feature)) -> df
  
  return(df)
}

calc_D_per_feature <- function(experiment, df) {
  
  df %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    summarise(mean_rt = mean(rt), .groups = "drop") %>%
    mutate(d_feature = fct_drop(d_feature)) -> df
  
  df <- account_for_zero_distracters(df)
  
  m <- lm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, df)
  coef_tab <- summary(m)$coefficients
  
  d_out <- tibble(
    exp_id = experiment,
    d_feature = levels(df$d_feature),
    D = c(coef_tab[4:6,1]))
  
  return(d_out)
}

predict_D_overall <- function(f, D)
{
  # f is a feature condition, such as "blue circle"
  # D is the dataframe that is output by calc_D_per_feature
  f1 <- word(f, 1)
  f2 <- word(f, 2)
  
  D1 = as.numeric(filter(D, d_feature == f1)$D)
  D2 = as.numeric(filter(D, d_feature == f2)$D)
  
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = min(D1, D2)
  D_orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))
  
  return(list(
    "best feature" = D_best_feature, 
    "orthog. contrast" = D_orth_contrast, 
    "collinear" = D_collinear))
}

gen_exp_predictions <- function(e_id) 
{
  # Predict values of D for composite features
  
  df <- filter(d, exp_id == e_id) %>%
    mutate(d_feature = fct_drop(d_feature))
  
  e_n = parse_number(e_id)
  D <- filter(exp_D, parse_number(exp_id) == e_n - 1)
  
  d_out <- tibble(
    exp_id = e_id,
    d_feature = levels(df$d_feature)[2:4], 
    map_dfr(levels(df$d_feature)[2:4], predict_D_overall, D))
  
  return(d_out)
}

extract_a_value <- function(e_id) {
  
  d %>% filter(exp_id == e_id, N_T == 0) %>% 
    group_by(exp_id, p_id) %>%
    summarise(mean_rt = mean(rt), .groups = "drop") %>%
    summarise(a = mean(mean_rt)) -> a
  
  return(a$a)
}

extract_D <- function(e_id) {
  
  D <- filter(pred_D, exp_id == e_id) %>% arrange(collinear)
  return(D)
}

predict_rt <- function(e_id) {
  
  a <- extract_a_value(e_id)
  D <- extract_D(e_id)	
  N_T <- c(1,4,9,19,31)
  rt <- a +  log(N_T + 1) %*% t(D$collinear)
  colnames(rt) <- unique(D$d_feature)
  d_out <- as_tibble(rt )
  
  d_out <- d_out %>% 
    mutate(exp_id = e_id, N_T = N_T) %>% 
    pivot_longer(-c(N_T, exp_id), names_to = "d_feature", values_to = "p_rt") 
  
  return(d_out)
}

fit_glmm_to_an_exp <- function(experiment, df, ppc = FALSE) {
  
  df %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  df <- account_for_zero_distracters(df)
  
  intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
  slopes <- gsub("[[:space:]]", "", slopes)
  
  my_priors <- c(
    prior_string("normal(-0.5, 0.01)", class = "b", coef = intercepts),
    prior_string("normal(0, 0.01)", class = "b", coef = slopes),
    prior_string("cauchy(0, 0.01)", class = "sd")
  )
  
  if (ppc == TRUE)
  {
    # Raather than fit model, compute prior predictions
    m <- brm(
      rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id),
      data = df,
      family = lognormal(link = "identity"),
      prior = my_priors,
      chains = 1,
      sample_prior = "only",
      iter = 5000)
    
  } else {
    m <- brm(
      rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id),
      data = df,
      family = lognormal(link = "identity"),
      prior = my_priors,
      chains = 1,
      iter = 5000)
  }
  
  return(m)
}

plot_model_fits_ex <- function(df, experiment, m, people2plot) {
  
  df %>%
    filter(
      exp_id == experiment, N_T > 0,
      p_id %in% paste(experiment, people2plot, sep = "-")) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> d_plt
  
  d_plt %>%
    modelr::data_grid(p_id, N_T= seq(0,36,4), d_feature) %>%
    add_predicted_draws(m) %>% 
    ggplot(aes(x = log(N_T+1), y = .prediction, colour = d_feature)) + 
    stat_lineribbon(.width = c(0.5, 0.9)) + 
    geom_jitter(
      data = d_plt, 
      aes(y = rt), 
      alpha = 0.1) + 
    facet_grid(d_feature ~ p_id) + 
    theme_bw() + 
    scale_fill_brewer(palette = "Greys") + 
    scale_colour_manual(values = c("orange1", "cornflowerblue", "yellow3")) +
    scale_y_log10("reaction time") 
}

