set_up_model <- function(experiment, df, fam = "lognormal") {
  
  # this function get's everything ready for running our model
  # mainly, this involves defining priors.
  
  # subset data to take just th experiment that we're instered in
  df %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  # Anna..... 
  df <- account_for_zero_distracters(df)
  
  # define model formula:
  my_f <- rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id)
  
  #list of variables/coefs that we want to define priors for:
  intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
  slopes <- gsub("[[:space:]]", "", slopes)
  
  # now define priors, based on our choice of distribution:
  if ( fam == "lognormal") {
    
    my_prior <- c(
      prior_string("normal(-0.5, 0.1)", class = "b", coef = intercepts),
      prior_string("normal(0, 1)", class = "b", coef = slopes))
  
  } else if(fam == "shifted") {
    
    my_prior <- c(
      prior_string("normal(-0.5, 0.1)", class = "b", coef = intercepts),
      prior_string("normal(0, 1)", class = "b", coef = slopes))
    
  } else { 
    
    # use a normal distribution
    my_prior <- c(
      prior_string("normal(0.6, 0.1)", class = "b", coef = intercepts),
      prior_string("normal(0, 1)", class = "b", coef = slopes))
  }
  
  return(list(my_formula = my_f, my_prior = my_prior, df = df, my_dist = fam))
   
}

run_model <- function(my_inputs, ppc) {
  
  # ppc = TRUE to carry out a prior predictive check
  n_itr = 1000
  
  # if we are only sampling from the prior, we will use a small subset of the data
  # this is done to optimistically make things go faster!
  if (ppc == 'only') {
    my_inputs$df %>% 
      group_by(p_id, d_feature, N_T) %>%
      summarise(rt = sample(rt, 1), .groups = "drop") -> my_inputs$dfdf
  }
  
  # now run model, depending on choice of distribution

  m <- brm(
    my_inputs$my_f, data = my_inputs$df,
    family = brmsfamily(my_inputs$my_dist),
    prior = my_inputs$my_prior,
    chains = 1,
    sample_prior = ppc,
    ter = n_itr,
    # save_pars = save_pars(all=TRUE)
    )

  return(m)
  
}
  
plot_model_fits_ex <- function(df, experiment, m, people2plot, inc_re = NA) {
  
  df %>%
    filter(
      exp_id == experiment, N_T > 0) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> d_plt
  
  d_plt <- sample_n(d_plt, 500)
  
  d_plt %>%
    modelr::data_grid(p_id, N_T= seq(0,36,4), d_feature) %>%
    add_predicted_draws(m, re_formula = inc_re) %>% 
    ggplot(aes(x = log(N_T+1), y = .prediction)) + 
    stat_lineribbon(.width = c(0.59, 0.73, 0.89)) + 
    geom_point(
      data = d_plt, 
      aes(y = rt), 
      alpha = 0.25, colour = "darkred") + 
    facet_grid(. ~ d_feature) + 
    theme_bw() + 
    scale_fill_brewer(palette = "Greys") + 
    scale_colour_manual(values = c("orange1", "cornflowerblue", "yellow3")) -> plt #+
    #scale_y_log10("reaction time") -> pltcoord_cartesian(ylim = c(-10, 10)) 
  
  return(plt)
}

extract_fixed_slopes_from_model <- function(m, df) {
  
  # experiment <- unique(d$exp_id)[exp_n]
  # m <- ms[[exp_n]]
  
  vars <- get_variables(m)
  slopes <- str_subset(vars, "b_d_[a-z]*:")
  
  samples <- posterior_samples(m, slopes, add_chain = TRUE, subset = 1:1000) %>%
    pivot_longer(starts_with("b_d"), names_to = "d_feature", values_to = "D") %>%
    mutate(
      d_feature = as_factor(d_feature)) %>%
    select(d_feature, D, iter)
  
  levels(samples$d_feature) <- str_extract(
    levels(samples$d_feature), "(?<=feature)[a-z]+(?=:logN_TP1)")
  
  return(samples)
  
}

calc_D_overall_b <- function(f, Dx, De)
{
  f1 <- word(f, 1)
  f2 <- word(f, 2)
  
  D1 = as.numeric(filter(Dx, d_feature == f1)$D)
  D2 = as.numeric(filter(Dx, d_feature == f2)$D)
  
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))
  
  return(tibble(
    d_feature = gsub("[[:space:]]", "", f),
    D = filter(De,  d_feature == paste(f1, f2, sep = ""))$D,
    iter = filter(De, d_feature == paste(f1, f2, sep = ""))$iter,
    "best_feature" = D_best_feature, 
    "orthog_contrast" = D_orth_contrast, 
    "collinear" = D_collinear) %>%
    rename(De = "D"))
}


get_Dp_samples <- function(e_id, d, Dx, De) {
  # This function predicts the values for D of experiment 2 (or 4) 
  # based on the results or experiment 1 (3). 
  #
  # e_id is the experiment we want to predict slopes for (2 or 4)
  # d is the dataframe with all the data
  # Dx are the slopes for experiment e_id - 1
  # De are the empirical slopes for experiment e_id
  # 
  # We output Dp, the predicted slopes for experiment e_id
  
  df <- filter(d, exp_id == e_id, N_T > 0) %>%
    mutate(d_feature = fct_drop(d_feature))
  
  Dp <- tibble(
    exp_id = e_id,
    map_dfr(levels(df$d_feature), calc_D_overall_b, Dx, De)) %>%
    pivot_longer(
      cols = c(best_feature, orthog_contrast, collinear),
      values_to = "Dp",
      names_to = "method")
  
  return(Dp) 
}


set_up_predict_model <- function(e_id, df, fam = "lognormal",  meth, Dp_summary) {
  
  # this function get's everything ready for running our model
  
  df %>%
    filter(exp_id == e_id) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  df <- account_for_zero_distracters(df)
  
  # define model formula:
  my_f <- rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id)
  
  Dp_summary <- filter(Dp_summary, 
                       method == meth, exp_id == e_id)
  
  # e_n <- which(unique(df$exp_id) == e_id)
  
  df %>%
    filter(exp_id == e_id) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) %>%
    filter(d_feature != "no distractors") %>%
    mutate(
      d_feature = fct_drop(d_feature),
      d_feature = as.factor(as.character(d_feature))) -> df
  
  
  if(e_id == 2) {
    m <- m_exp2_log
  } else {
    m <- m_exp4_log}
  
  intercepts <- paste("d_feature", unique(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  Dp_summary$d_feature <- paste("d_feature", unique(Dp_summary$d_feature), ":logN_TP1", sep = "")
  
  
  my_prior <-  c(
    prior_string(paste("normal(", summary(m)$fixed[1,1], ",",  summary(m)$fixed[1,2], ")", sep = ""), class = "b", coef = intercepts[1]),
    prior_string(paste("normal(", summary(m)$fixed[2,1], ",",  summary(m)$fixed[2,2], ")", sep = ""), class = "b", coef = intercepts[2]),
    prior_string(paste("normal(", summary(m)$fixed[3,1], ",",  summary(m)$fixed[3,2], ")", sep = ""), class = "b", coef = intercepts[3]),
    prior_string(paste("normal(", Dp_summary$mu[1], ",",  Dp_summary$sigma[1], ")", sep = ""), class = "b", coef = Dp_summary$d_feature[1]),
    prior_string(paste("normal(", Dp_summary$mu[2], ",",  Dp_summary$sigma[2], ")", sep = ""), class = "b", coef = Dp_summary$d_feature[2]),
    prior_string(paste("normal(", Dp_summary$mu[3], ",",  Dp_summary$sigma[3], ")", sep = ""), class = "b", coef = Dp_summary$d_feature[3]),
    prior(normal(0.25, 0.01), class = "sigma"))
  
  
  return(list(my_formula = my_f, my_prior = my_prior, df = df, my_dist = fam))
  
}



predict_rt_b <- function(e_id, meth, Dp_summary, df) {
  
 
  
  m <- brm(
    rt ~  0 + d_feature + log(N_T+1):d_feature ,
    data = df,
    family = lognormal(link = "identity"),
    prior = model_params,
    chains = 1,
    sample_prior = "only",
    iter = 1000)
  
  #Getting mean RTs
  
  df_test <- df %>%
    group_by(d_feature, N_T) %>%
    summarise(mean_rt = mean(rt/1000),
              sd_rt = sd(rt/1000))
  

  d_out <- df %>%
    modelr::data_grid(d_feature = levels(df$d_feature), N_T = unique(df$N_T)) %>%
    add_fitted_draws(m, scale = "response") %>%
    mean_hdci() %>%
    mutate(exp_id = e_id)
  
  return(d_out)
}

# compute_dist <- function(feat, m_family, N_T) {
#   
#   
#   if (m_family == "normal") {
#     ss <- samples_nrl
#   } else {
#     ss <- samples_idt
#   }
#   
#   a <- ss[paste("b_d_feature", feat, sep = "")][[1]]
#   D <- ss[paste("b_d_feature", feat, ":logN_TP1", sep = "")][[1]]
#   sigma <-ss["sigma"][[1]]
#   
#   mu <- a + log(N_T+1)*D
#   
#   d_out <- tibble(distribution = as.character(), d_feature = as.character(), N_T = as.numeric(), iter = as.numeric(), rt = as.numeric(), p = as.numeric())
#   
#   rt = seq(0.01, 3, 0.01)
#   
#   for (ii in 1:10) {
#     if (m_family == "normal") 
#     {
#       pred = dnorm(rt, mu[ii], sigma[ii])
#     } else {
#       pred =    dlnorm(rt, mu[ii], sigma[ii])
#     }
#     
#     d_out %>% add_row(
#       distribution = m_family,
#       d_feature = feat,
#       N_T = N_T,
#       iter = ii,
#       rt = rt,
#       p = pred)-> d_out
#   }
#   
#   return(d_out)
#   
# }