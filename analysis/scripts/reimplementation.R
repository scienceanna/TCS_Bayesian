# These functions are for the direct computational replication



calc_D_per_feature <- function(experiment) {
  
  d %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    summarise(mean_rt = mean(rt), .groups = "drop") %>%
    mutate(d_feature = fct_drop(d_feature)) -> df
  
  n_feat <- length(levels(df$d_feature))
  
  m <- lm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, df)
  coef_tab <- summary(m)$coefficients
  
  d_out <- tibble(
    exp_id = experiment,
    d_feature = levels(df$d_feature),
    D = c(coef_tab[(n_feat+1):(2*n_feat),1]))
  
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

gen_exp_predictions <- function(experiment, De) 
{
  # Predict values of D for composite features
  
  df <- filter(d, exp_id == experiment) %>%
    mutate(d_feature = fct_drop(d_feature))
  

  D <- filter(De, exp_id == experiment - 1)
  
  d_out <- tibble(
    exp_id = experiment,
    d_feature = levels(df$d_feature), 
    map_dfr(levels(df$d_feature), predict_D_overall, D))
  
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
  
  D <- filter(Dp, exp_id == e_id) %>% arrange(collinear)
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
