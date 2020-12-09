our_changes_to_data <- function(d) {
  
  d %>% mutate(
    exp_id = parse_number(exp_id), 
    rt = rt/1000) %>% 
    filter(
      rt > quantile(rt, 0.01), 
      rt < quantile(rt, 0.99)) -> d
  
}

set_up_model <- function(experiment, fam = "lognormal") {
  
  # this function get's everything ready for running our model
  # mainly, this involves defining priors.
  
  # check fam input is ok!
  if (!(fam %in% c("normal", "lognormal", "shifted_lognormal"))) {
    print("error")
    stop()
  }
  
  # subset data to take just th experiment that we're inserted in
  d %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  # define model formula:
  if (fam == "shifted_lognormal") {
  my_f <- bf(rt ~ 1 + d_feature:log(N_T+1) + (1|p_id), 
               ndt ~ 1 + (1|p_id))
  
  my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))
  
  } else {
    
  my_f <- rt ~  1 + d_feature:log(N_T+1) + (1|p_id)
  my_inits <- "random"
    
  }
  
  #list of variables/coefs that we want to define priors for:
  #intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
  #intercepts <- gsub("[[:space:]]", "", intercepts)
  #slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
  #slopes <- gsub("[[:space:]]", "", slopes)
  
  # now define priors, based on our choice of distribution:
  if ( fam == "lognormal") {
    
    my_prior <- c(
      prior_string("normal(-0.5, 0.3)", class = "Intercept"),
      prior_string("normal(0.1, 0.3)", class = "b"),
      prior_string("cauchy(0, 0.1)", class = "sigma"))
  
  } else if(fam == "shifted_lognormal") {
    
    my_prior <- c(
      prior_string("normal(-1.4, 0.2)", class = "Intercept"),
      prior_string("normal(0, 0.2)", class = "b"),
      prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
      prior_string("cauchy(0, 0.4)", class = "sigma"),
      prior_string("cauchy(0, 0.05)", class = "sd"),
      prior_string("cauchy(0, 0.05)", class = "sd", dpar = "ndt"))
    
  } else { 
    
    # use a normal distribution
    my_prior <- c(
      prior_string("normal(0.5, 0.3)", class = "Intercept"),
      prior_string("normal(0, 0.6)", class = "b"),
      prior_string("cauchy(0, 0.1)", class = "sigma"))
  }
  
  return(list(my_formula = my_f, my_inits = my_inits, my_prior = my_prior, df = df, my_dist = fam))
   
}

run_model <- function(my_inputs, ppc) {
  
  # run the multi-level Bayesian model for predicting reaction times.
  #
  # my_inputs is a list that contains
  # df - the data that we want to fit the model to
  # my_f - the model formula that we will use 
  # my_prior - the distributions to use as a prior (or sample from)
  # 
  # Additionally, we will also use:
  # ppc = 'TRUE' to only to carry out a prior predictive check
  
  # set number of chains and iterations per chain:

  if (ppc == "only") {
    
    n_chains = 2
    n_itr = 1000
    
  } else {
    
    n_chains = 4
    n_itr = 5000
    
  }

  # if we are only sampling from the prior, we will use a small subset of the data
  # this is done to optimistically make things go faster!
  if (ppc == 'only') {
    my_inputs$df %>% 
      group_by(p_id, d_feature, N_T) %>%
      summarise(rt = sample(rt, 1), .groups = "drop") -> my_inputs$df
  }
  
  # now run model
  m <- brm(
    my_inputs$my_f, data = my_inputs$df,
    family = brmsfamily(my_inputs$my_dist),
    prior = my_inputs$my_prior,
    chains = n_chains,
    sample_prior = ppc,
    iter = n_itr,
    inits = my_inputs$my_inits,
    stanvars = my_inputs$my_stanvar,
    save_pars = save_pars(all=TRUE)
    )

  return(m)
  
}
  
plot_model_fits_rt <- function(e_id, m, plot_type = 'predicted', y_limits = c(0, 1.5), n_row = 1, feature2plot = 'all', dot_col = "yellow1") {
  
  # plot search slopes for experiment e_id
  
  # take the experiment we want, and remove the N_T == 0 case.
  
  if (feature2plot == "all") {
    
    d %>%
      filter(
        exp_id == e_id) %>%
      mutate(
        d_feature = fct_drop(d_feature),
        p_id = fct_drop(p_id)) %>%
      ungroup() -> d_plt
    
  } else {
    
    d %>%
      filter(
        exp_id == e_id, d_feature == feature2plot) %>%
      mutate(
        d_feature = fct_drop(d_feature),
        p_id = fct_drop(p_id)) -> d_plt
  }
  
  if (plot_type == "predicted") {
    
    # include all group-level effects. 
    # Let's simulate 100 new people!
    d_plt %>%
      modelr::data_grid(N_T = seq(0,36,4), d_feature, p_id = 1:100)  %>%
      add_predicted_draws(m, re_formula = NULL, allow_new_levels = TRUE, n = 100) %>%
      ungroup() %>% 
      select(-p_id) %>% 
      group_by(d_feature, N_T) -> d_hdci
    
  } else {
    
    # no group-level effects are included, so we are plotting 
    # for the average participant
    d_plt %>% 
      modelr::data_grid(N_T = seq(0,36,4), d_feature) %>%
      add_fitted_draws(m, re_formula = NA, scale = "response", n = 500) -> d_hdci
    
    # we will plot these against the mean mean rt
    
    d_plt %>% group_by(N_T, d_feature, p_id) %>%
      summarise(mean_rt = mean(rt), .groups = "drop") %>%
      group_by(N_T, d_feature) %>%
      summarise(mean_rt = mean(mean_rt), .groups = "drop") -> d_plt
  }

  # calc 53% and 97% intervals for the model
  d_hdci %>% mean_hdci(.width = c(0.53, 0.97)) -> d_hdci
  
  plt <- plot_ribbon_quantiles(d_hdci, d_plt, y_limits, n_row, plot_type, dot_col)
  
  return(plt)
  
}

plot_ribbon_quantiles <- function(d_hdci, d_plt, y_limits, n_row, plot_type, dot_col)
{

  if(plot_type == "fitted") {
        my_dots <- geom_point(data = d_plt, aes(y = mean_rt), alpha = 0.75, color = dot_col)
  } else {
    my_dots <- stat_dots(data = d_plt, aes(y = rt), alpha = 0.75,  quantiles = 100, color = dot_col)
}
  
  d_hdci %>% 
    ggplot(aes(x = N_T)) + 
    geom_ribbon(aes( ymin = .lower, ymax = .upper, group = .width),  alpha = 0.5, fill = "palevioletred1") +
    my_dots + 
    geom_hline(yintercept = 0, colour = "white") + 
    facet_wrap( ~ d_feature, nrow = n_row) + 
    # scale_fill_brewer(palette = "Greys") + 
    scale_x_continuous(TeX("$N_T$")) + 
    scale_y_continuous("reaction time (seconds)", expand = c(0,0)) +
    coord_cartesian(ylim = y_limits) -> plt
  
  return(plt)
  
}

extract_fixed_slopes_from_model <- function(m) {
  
  # Extract the slopes from the rt models.
  # These values are called 'D' in the original paper

  n_samples <- 1000 # the number of posterior samples to extract!
  
  # get the slopes from the model
  slopes <- str_subset(get_variables(m), "b_d_[a-z]*:")

  # get samples from the posterior for these slopes
  samples <- posterior_samples(m, slopes, 
                               add_chain = TRUE, 
                               subset =sample(1:nsamples(m), n_samples)) %>%
    pivot_longer(starts_with("b_d"), names_to = "d_feature", values_to = "D") %>%
    mutate(
      d_feature = as_factor(d_feature)) %>%
    select(d_feature, D, iter)
  
  # tidy up factor labels
  levels(samples$d_feature) <- str_extract(
    levels(samples$d_feature), "(?<=feature)[a-z]+(?=:logN_TP1)")
  
  return(samples)
  
}

calc_D_overall_b <- function(f, Dx, De)
{
  
  # calculate the D_overall value. 
  # Dx are the slopes (D values) from experiment 1 (or 3)
  # De are the slopes from experiment 2 (or 4) [e stands for empirical]
  
  # remember, that Dx, De and our output Dps are all big long vectors of samples
  # from the model's posterior
  
  # f is the compound feature that we wish to calculate D_overall for
  # i.e. f = "blue triangle"
  
  # first, get the two individual features...
  f1 <- word(f, 1)
  f2 <- word(f, 2)
  
  # ... and their related Dx values
  D1 = as.numeric(filter(Dx, d_feature == f1)$D)
  D2 = as.numeric(filter(Dx, d_feature == f2)$D)
  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
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
      names_to = "method") %>%
    mutate(
      method = as_factor(method))
  
  return(Dp) 
}

convert_d_feature_to_coef_name <- function(Dp) {
  
  Dp <- paste("d_feature", Dp, ":logN_TP1", sep = "")
  
}

set_up_predict_model <- function(e_id, fam = "shifted_lognormal", meth, Dp_summary, one_feature_model, two_feature_model) {
  
  # this function get's everything ready for running our model
  # this is the prediction version of the set_up_model() function at the top of the script
  
  d %>%
    filter(exp_id == e_id) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  # define model formula:
  if (fam == "shifted_lognormal") {
    my_f <- bf(rt ~ 1 + d_feature:log(N_T+1) + (1|p_id),
               ndt ~ 1 + (1|p_id))
    
    my_inits <- list(list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10), list(Intercept_ndt = -10))
    
  } else {
    my_f <- rt ~ 1 + log(N_T+1):d_feature + (1|p_id)
    my_inits <- "random"
  }
  
  Dp_summary <- filter(Dp_summary, 
                       method == meth, exp_id == e_id)
  
  df %>%
    filter(exp_id == e_id) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) %>%
    filter(d_feature != "no distractors") %>%
    mutate(
      d_feature = fct_drop(d_feature),
      d_feature = as.factor(as.character(d_feature))) -> df


  # cheatign a little and using the "correct" intercepts 
  # (from the double feature model)
  intercept_mu <- fixef(two_feature_model)[1,1]
  intercept_sd <- fixef(two_feature_model)[1,2]
  
  ndt_int_mu <- fixef(two_feature_model)[2,1]
  ndt_int_sd <- fixef(two_feature_model)[2,2]
  
  # simply copy over from experiment 1
  sigma_mean <-  VarCorr(one_feature_model)$residual$sd[1]
  sigma_sd   <-  VarCorr(one_feature_model)$residual$sd[2]
  
  sd_mean <- VarCorr(one_feature_model)$p_id$sd[1,1]
  sd_sd <- VarCorr(one_feature_model)$p_id$sd[1,2]
  
  sd_ndt_mean <- VarCorr(one_feature_model)$p_id$sd[2,1]
  sd_ndt_sd <- VarCorr(one_feature_model)$p_id$sd[2,2]
  
  # use our model of D!
  slopes <- convert_d_feature_to_coef_name(Dp_summary$d_feature)
  slopes_mu <-Dp_summary$mu 
  slopes_sd <-Dp_summary$sigma 
  
    
  my_prior <-  c(
    prior_string(paste("normal(", intercept_mu, ",",  intercept_sd, ")", sep = ""), class = "Intercept"),
    prior_string(paste("normal(", slopes_mu, ",",  slopes_sd, ")", sep = ""), class = "b", coef = slopes),
    prior(normal(sigma_mean, sigma_sd), class = "sigma"),
    prior(normal(sd_mean, sd_sd), class = "sd"),
    prior_string(paste("normal(",ndt_int_mu, ", ", ndt_int_sd, ")"), class = "Intercept", dpar = "ndt" ),
    prior_string(paste("normal(",sd_ndt_mean,",", sd_ndt_sd,")"), class = "sd", dpar = "ndt")
    )
   
  stanvars <- stanvar(sigma_mean, name='sigma_mean') + 
    stanvar(sigma_sd, name='sigma_sd') + 
    stanvar(sd_mean, name='sd_mean') + 
    stanvar(sd_sd, name='sd_sd')
  
  return(list(my_formula = my_f, my_inits = my_inits, my_prior = my_prior, df = df, my_dist = fam, my_stanvar = stanvars))
  
}

lm_D <- function(df) {
  
  my_lm = lm(De ~ 0 + method + Dp:method, df)
  
  return(tibble(method = levels(df$method),
                intercept = summary(my_lm)$coefficients[1:3,1],
                slope = summary(my_lm)$coefficients[4:6,1]))
  
}

get_Dp_lines <- function(Dp_s) {
  
  Dp_s %>% 
    group_split(iter) %>%
    map_dfr(lm_D) %>%
    group_by(method) %>%
    sample_n(50) %>%
    # mean_hdci(.width = 0.97) %>%
    mutate(method = as_factor(method)) -> Dp_lines
  
  return(Dp_lines)
  
}

plot_Dp_lines <- function(Dp_lines, dot_col = "yellow1", xyline_col = "cyan") {
  
  # x_range = 0.25
  # bind_rows(Dp_lines %>% mutate(x = 0, .lower = 0, .upper = 0),
            # Dp_lines %>% mutate(x = x_range, .lower = x * .lower, .upper = x * .upper)) -> Dp_lines
  
  
  Dp_samples %>%
    group_by(exp_id, d_feature, method) %>%
    mean_hdci(Dp, De) %>%
    ggplot() +
    geom_abline(linetype = 2, colour = xyline_col) +
     geom_point(aes(x = Dp, y = De), color = dot_col) +
    geom_linerange(aes(x = Dp, ymin = De.lower, ymax = De.upper), color = dot_col) +
   # geom_linerange(aes(y = De, xmin = Dp.lower, xmax = Dp.upper), color = dot_col) +
   geom_abline(data = Dp_lines, aes(intercept = intercept, slope = slope), colour = "palevioletred1", alpha = 0.1) +
     facet_wrap(~method, nrow = 1) +
    # geom_ribbon(data = Dp_lines, aes(x = x,  ymin = .lower, ymax=  .upper), alpha = 0.5, fill = "palevioletred1") + 
    coord_fixed(xlim = c(0, 0.25), ylim = c(0, 0.25)) +
    scale_x_continuous(TeX("Predicted value for $D_{c,s}$"), expand = c(0, 0), breaks = c(0, 0.1, 0.2)) +
    scale_y_continuous(TeX("empirical value for $D_{c,s}$"), expand = c(0, 0), breaks = c(0, 0.1, 0.2)) 
  
}

rank_order_people <- function(e_id, shuffle_noise = 0.025) {
  
  d %>% filter(exp_id == e_id) %>%
    group_by(p_id) %>%
    summarise(m_rt = median(rt), .groups = 'drop') %>%
    mutate(m_rt = m_rt + rnorm(20, 0, shuffle_noise)) %>%
    arrange(m_rt) %>%
    mutate(ps_id = 1:20) %>%
    select(-m_rt) -> d_out
  
  return(d_out)
}

bayes_corr_subsample <- function(df, n_trials = NA) {
  
  if (is.finite(n_trials)) {
    df %>% group_by(p_id, exp_id, d_feature, N_T) %>%
      sample_n(n_trials) %>%
      ungroup() -> df
  }
  
  df %>% group_by(ps_id, exp_id) %>%

    summarise(m_rt = median(rt), .groups = "drop") %>% 
    mutate(exp_id = paste("exp_id", exp_id, sep = "" )) %>%
    pivot_wider(names_from = "exp_id", values_from = "m_rt") -> dm_ns
  
  m <- brm(exp_id2 ~ exp_id1, data = dm_ns)
  return(bayes_R2(m))
  
}
