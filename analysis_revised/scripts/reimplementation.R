# These functions are for the direct computational replication

calc_D_per_feature <- function(experiment, approach = "freq") {
  
  d %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    summarise(mean_rt = mean(rt), .groups = "drop") %>%
    mutate(d_feature = fct_drop(d_feature)) -> df
  
  n_feat <- length(levels(df$d_feature))
  
  if (approach == "freq") {
    m <- lm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, df)
    coef_tab <- summary(m)$coefficients
    
    d_out <- tibble(
      exp_id = experiment,
      d_feature = levels(df$d_feature),
      D = c(coef_tab[(n_feat+1):(2*n_feat),1]))
  } 
  else if (approach == "Bayes") {
    m <- brm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, 
             data = df, 
             iter = 500, 
             chains = 2,
             refresh = 0)
    
    # get the slopes from the model
    slopes <- str_subset(get_variables(m), "b_d_[a-z]*:")
    
    d_out <- posterior_samples(m, slopes) %>%
      pivot_longer(starts_with("b_d"), names_to = "d_feature", values_to = "D") %>%
      mutate(
        exp_id = experiment,
        d_feature = str_remove(d_feature, "b_d_feature"),
        d_feature = str_remove(d_feature, ":logN_TP1"),
        d_feature = as_factor(d_feature)) %>%
      select(exp_id, d_feature, D)
  }
  
  rm(m)
  
  return(d_out)
}

predict_D_overall <- function(f, D, approach = "freq")
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
  
  return(tibble(
    d_feature = f,
    "best feature" = D_best_feature, 
    "orthog. contrast" = D_orth_contrast, 
    "collinear" = D_collinear))
}

gen_exp_predictions <- function(experiment, De, approach = "freq") 
{
  # Predict values of D for composite features
  
  df <- filter(d, exp_id == experiment) %>%
    mutate(d_feature = fct_drop(d_feature))
  
  prev_exp_number <- parse_number(experiment) - 1
  prev_exps <- c(
    paste(prev_exp_number, "a", sep = ""),
    paste(prev_exp_number, "b", sep = ""))

  D <- filter(De, exp_id %in% prev_exps)
  
  d_out <- tibble(
    exp_id = experiment,
    map_dfr(levels(df$d_feature), predict_D_overall, D, approach))
  
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
  
  D <- filter(Dp, exp_id == e_id)# %>% arrange(collinear)
  return(D)
}

predict_rt <- function(e_id, meth) {
  
  a <- extract_a_value(e_id)
  D <- extract_D(e_id)	
  N_T <- c(0, 1,4,9,19,31)
  rt <- a +  log(N_T + 1) %*% t(D[[meth]])
  colnames(rt) <- unique(D$d_feature)
  d_out <- as_tibble(rt )
  
  d_out <- d_out %>% 
    mutate(exp_id = e_id, N_T = N_T) %>% 
    pivot_longer(-c(N_T, exp_id), names_to = "d_feature", values_to = "p_rt") 
  
  return(d_out)
}
