fit_glmm_to_an_exp <- function(experiment, df, ppc = FALSE) {
  
  # ppc = TRUE to carry out a prior predictive check
  # link = "indentity" 
  
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
    prior_string("normal(-0.5, 0.1)", class = "b", coef = intercepts),
    prior_string("normal(0, 0.05)", class = "b", coef = slopes),
    prior(student_t(3, 0, 2), class = "sd"))
  
  if (ppc == TRUE)
  {
    # Rather than fit model, compute prior predictions
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

extract_fixed_slopes_from_model <- function(exp_n, ms, df) {
  
  experiment <- unique(d$exp_id)[exp_n]
  m <- ms[[exp_n]]
  
  vars <- get_variables(m)
  slopes <- str_subset(vars, "b_d_[a-z]*:")
  
  samples <- posterior_samples(m, slopes, 
                               subset = runif(1000, 1, 1000)) %>%
    pivot_longer(starts_with("b_d"), names_to = "d_feature", values_to = "D") %>%
    mutate(
      exp_id = experiment,
      d_feature = as_factor(d_feature)) %>%
    select(exp_id, d_feature, D)
  
  levels(samples$d_feature) <- str_extract(
    levels(samples$d_feature), "(?<=feature)[a-z]+(?=:logN_TP1)")
  
  return(samples)
  
}

calc_D_overall_b <- function(f, D)
{
  f1 <- word(f, 1)
  f2 <- word(f, 2)
  
  D1 = as.numeric(filter(D, d_feature == f1)$D)
  D2 = as.numeric(filter(D, d_feature == f2)$D)
  
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))
  
  return(tibble(
    d_feature = gsub("[[:space:]]", "", f),
    "best_feature" = D_best_feature, 
    "orthog_contrast" = D_orth_contrast, 
    "collinear" = D_collinear))
}


gen_exp_predictions_b <- function(e_id, d) {
  
  df <- filter(d, exp_id == e_id, N_T > 0) %>%
    mutate(d_feature = fct_drop(d_feature))
  
  e_n = parse_number(e_id)
  D <- filter(exp_D, parse_number(exp_id) == e_n - 1)
  
  d_out <- tibble(
    exp_id = e_id,
    map_dfr(levels(df$d_feature), calc_D_overall_b, D)) %>%
    pivot_longer(
      cols = c(best_feature, orthog_contrast, collinear),
      values_to = "D_pred",
      names_to = "method") %>%
    group_by(d_feature, method) %>%
    mean_hdci(D_pred) %>%
    mutate(exp_id = e_id) %>%
    select(exp_id, d_feature, method, D_pred, .lower, .upper)
  
  return(d_out)
}

extract_D_b <- function(e_id, meth) {
  D <- filter(pred_D, exp_id == e_id, method == meth) 
  return(D)
}

predict_rt_b <- function(e_id) {
  
  a <- extract_a_value(e_id)
  N_T <- c(1,4,9,19,31)
  
  d_out <- tibble()
  
  rt_emp <- filter(d, exp_id == e_id, N_T > 0) %>% 
    mutate(d_feature = gsub("[[:space:]]", "", d_feature)) %>%
    group_by(N_T, d_feature) %>%
    summarise(median_rt = median(rt), .groups = "drop") %>%
    arrange(N_T, d_feature)
  
  for (method in unique(pred_D$method)) {
    
    D <- extract_D_b(e_id, method)	
    
    rt_lower <- a + log(N_T + 1) %*% t(D$.lower)
    rt_upper <- a + log(N_T + 1) %*% t(D$.upper)
    
    colnames(rt_lower) <- unique(D$d_feature) 
    colnames(rt_upper) <- unique(D$d_feature) 
    
    rt_range <- bind_rows(as_tibble(rt_lower), as_tibble(rt_upper)) %>%
      mutate(
        N_T = rep(N_T, 2),
        boundary = rep(c("lower", "upper"), each = 5)) %>% 
      pivot_longer(-c(N_T, boundary), names_to = "d_feature", values_to = "rt") %>%
      pivot_wider(names_from = "boundary", values_from = rt) %>%
      mutate(
        method = method, 
        exp_id = e_id,
        median_rt = rt_emp$median_rt)
    
    d_out <- bind_rows(d_out, rt_range)
    
  }
  
  return(d_out)
}
