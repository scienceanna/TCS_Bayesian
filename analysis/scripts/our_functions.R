set_up_model <- function(experiment, df, fam = "lognormal") {
  
  # this function get's everything ready for running our model
  # mainly, this involves defining priors.
  
  # check fam input is ok!
  if (!(fam %in% c("normal", "lognormal", "shifted_lognormal"))) {
    print("error")
    stop()
  }
  
  # subset data to take just th experiment that we're inserted in
  df %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  # Anna..... 
  df <- account_for_zero_distracters(df)
  
  # define model formula:
  my_f <- rt ~  0 + d_feature + log(N_T+1):d_feature + (1|p_id)
  
  #list of variables/coefs that we want to define priors for:
  intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
  slopes <- gsub("[[:space:]]", "", slopes)
  
  # now define priors, based on our choice of distribution:
  if ( fam == "lognormal") {
    
    my_prior <- c(
      prior_string("normal(-0.5, 0.2)", class = "b", coef = intercepts),
      prior_string("normal(0, 0.5)", class = "b", coef = slopes),
      prior_string("cauchy(0, 0.1)", class = "sigma"))
  
  } else if(fam == "shifted_lognormal") {
    
    my_prior <- c(
      prior_string("normal(-0.5, 0.2)", class = "b", coef = intercepts),
      prior_string("normal(0, 0.2)", class = "b", coef = slopes),
      prior_string("cauchy(0, 0.1)", class = "sigma"))
    
  } else { 
    
    # use a normal distribution
    my_prior <- c(
      prior_string("normal(0.5, 0.2)", class = "b", coef = intercepts),
      prior_string("normal(0, 0.5)", class = "b", coef = slopes),
      prior_string("cauchy(0, 0.1)", class = "sigma"))
  }
  
  return(list(my_formula = my_f, my_prior = my_prior, df = df, my_dist = fam))
   
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
  n_chains = 2
  n_itr = 5000
  
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
    # save_pars = save_pars(all=TRUE)
    )

  return(m)
  
}
  
plot_model_fits_ex <- function(df, e_id, m, inc_re = NA) {
  
  # plot search slopes for experiment e_id
  
  # take the experiment we want, and remove the N_T == 0 case.
  df %>%
    filter(
      exp_id == e_id, N_T > 0) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> d_plt
  
  # for plotting, sample 500 data points at random
  # set seed so each of the three model plots has the same  example points
  set.seed(1011) 
  d_plt <- sample_n(d_plt, 500)
  
  # plot 53% and 97% intervals for the model, and overall our randomly sampled
  # data points
  d_plt %>%
    modelr::data_grid(p_id, N_T= seq(0,36,4), d_feature) %>%
    add_predicted_draws(m, re_formula = inc_re) %>% 
    ggplot(aes(x = log(N_T+1), y = .prediction)) + 
    stat_lineribbon(.width = c(0.53, 0.97)) + 
    geom_jitter(
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

extract_fixed_slopes_from_model <- function(m) {
  
  # Extract the slopes from the rt models.
  # These values are called 'D' in the original paper

  # get the slopes from the model
  slopes <- str_subset(get_variables(m), "b_d_[a-z]*:")

  # get samples from the posterior for these slopes
  samples <- posterior_samples(m, slopes, add_chain = TRUE) %>%
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
    mutate(
      mean_method = (orthog_contrast + collinear)/2) %>%
    pivot_longer(
      cols = c(best_feature, orthog_contrast, collinear, mean_method),
      values_to = "Dp",
      names_to = "method")
  
  return(Dp) 
}


set_up_predict_model <- function(e_id, df, fam = "lognormal",  meth, Dp_summary) {
  
  # this function get's everything ready for running our model
  # this is the prediction version of the set_up_model() function at the top of the script
  
  df %>%
    filter(exp_id == e_id) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df
  
  df <- account_for_zero_distracters(df)
  
  # define model formula:
  my_f <- rt ~  0 + d_feature + log(N_T+1):d_feature + (1|p_id)
  
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
  
  
  if(e_id == 2) {
    m <- m_exp2_log
  } else {
    m <- m_exp4_log}
  
  intercepts <- paste("d_feature", unique(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  slopes <- paste("d_feature", unique(df$d_feature), ":logN_TP1", sep = "")
  slopes <- gsub("[[:space:]]", "", slopes)
  
  
  model_sum <- round(summary(m)$fixed, 3)
  
  my_prior <-  c(
    prior_string(paste("normal(", model_sum[1:length(intercepts),1], ",",  model_sum[1:length(intercepts),2], ")", sep = ""), class = "b", coef = intercepts),
    prior_string(paste("normal(", Dp_summary$mu, ",",  Dp_summary$sigma, ")", sep = ""), class = "b", coef = slopes),
prior(normal(0.25, 0.01), class = "sigma"))
  
  
  return(list(my_formula = my_f, my_prior = my_prior, df = df, my_dist = fam))
  
}


predict_rt_b <- function(e_id, m, df) {
  
   #Getting mean RTs
  df_test <- df %>%
    filter(exp_id == e_id, N_T > 0, d_feature != "no distractors") %>%
    group_by(d_feature, N_T) %>%
    summarise(mean_rt = mean(rt),
              sd_rt = sd(rt),
              .groups = "drop") %>%
    mutate(d_feature = fct_drop(d_feature))
  
  
  d_out <- df_test %>%
    modelr::data_grid(d_feature = unique(d_feature), N_T = unique(N_T)) %>%
    add_fitted_draws(m, scale = "response", re_formula = NA) %>%
    mean_hdci(.width = c(0.53, 0.97)) %>%
    mutate(exp_id = e_id)
  
  ggplot(d_out, aes(x  = N_T,)) + 
    geom_ribbon(aes(ymin = .lower, ymax = .upper, fill = d_feature, group = .width), alpha = 0.2) +
    geom_point(data = df_test, aes(y = mean_rt), alpha = 0.5) +
    facet_wrap(~d_feature)
  
  full_join(d_out, df_test) %>%
    ggplot(aes(x = .value, xmin = .lower, xmax = .upper, y = mean_rt)) + 
    geom_abline(linetype = 2) +
    geom_errorbarh() + 
    theme_bw() + 
    coord_fixed(xlim = c(0.5, 0.85), ylim = c(0.5, 0.85)) + 
    scale_x_continuous("model prediction")
  
  # now model for who range of predictions for unknown observers!
  d_out <- df_test %>%
    modelr::data_grid(d_feature = unique(d_feature), N_T = seq(0, 36, 2), p_id = 1:100) %>%
    add_predicted_draws(m, allow_new_levels = TRUE) %>%
    mean_hdci(.width = c(0.53, 0.97)) %>%
    mutate(exp_id = e_id)
  
  ggplot(d_out, aes(x  = N_T,)) + 
    geom_ribbon(aes(ymin = .lower, ymax = .upper, fill = d_feature, group = .width), alpha = 0.5) +
    stat_dots(data = filter(df, exp_id == e_id), aes(y = rt), alpha = 0.5,  quantiles = 100, size = 2) +
    facet_wrap(~d_feature) +
    theme_bw()
 
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