library(tidyverse)
library(readxl)
library(brms)
library(tidybayes)

import_experiment <- function(sheet, d_labels, exp_number, exp_part) {

	read_excel(
	"../previous_work/Buetti2019_data_code/OSF_originaldata.xlsx", 
	sheet = sheet) %>%
	# use tidier variable names
	select(
		p_id = "Subject",
		trial = "Trial",
		t_id = "tid",
		N_T = "numd",
		d_feature = "dcolors",
		rt = "RT",
		response = "resp",
		error = "Error") %>%
	# code up p_id, t_id and distracter colour as a factor
	mutate(
    exp_id = paste(exp_number, exp_part, sep = ""),
		p_id = paste(exp_id, p_id, sep="-"),
    p_id = as_factor(p_id),
    p_id = fct_drop(p_id),
		d_feature = as_factor(d_feature),
		d_feature = fct_recode(d_feature, !!!d_labels),
		t_id = as_factor(t_id),
		t_id = fct_recode(t_id, left = "0", right = "1"),
    rt = rt/1000) %>%
	# remove error trials
	filter(error == 0) -> d

	return(d)
}

d <- list()

d$e1a <- import_experiment(2,  c(orange = "1", blue = "2", yellow = "3"), 1, "a")
d$e1b <- import_experiment(4,  c(diamond = "1", circle = "2", triangle = "3"), 1, "b")
d$e2a <- import_experiment(6,  c(`orange diamond` = "1", `blue circle` = "2", `yellow triangle` = "3"), 2, "a")
d$e2b <- import_experiment(8,  c(`orange circle` = "1", `yellow diamond` = "2", `blue triangle` = "3"), 2, "b")
d$e2c <- import_experiment(10, c(`blue diamond` = "1", `yellow circle` = "2", `orange triangle` = "3"), 2, "c")
d$e3a <- import_experiment(12, c(orange = "1", blue = "2", yellow = "3"), 3, "a")
d$e3b <- import_experiment(14, c(diamond = "1", circle = "2", semicircle = "3"), 3, "b")
d$e4a <- import_experiment(16, c(`orange diamond` = "1", `blue circle` = "2", `yellow semicircle` = "3"), 4, "a")
d$e4b <- import_experiment(18, c(`orange circle` = "1", `yellow diamond` = "2", `blue semicircle` = "3"), 4, "b")
d$e4c <- import_experiment(20, c(`blue diamond` = "1", `yellow circle` = "2", `orange semicircle` = "3"), 4, "c")

d <- bind_rows(d) %>% filter(rt > 0)

fit_glmm_to_an_exp <- function(experiment, df) {

  df %>%
    filter(exp_id == experiment) %>%
    group_by(exp_id, p_id, d_feature, N_T) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> df

  bind_rows(
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[2]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[3]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[4]),
    filter(df, N_T>0)) %>%
    mutate(d_feature = as_factor(d_feature)) -> df

  intercepts <- paste("d_feature", levels(df$d_feature), sep = "")
  intercepts <- gsub("[[:space:]]", "", intercepts)
  
  slopes <- paste("d_feature", levels(df$d_feature), ":logN_TP1", sep = "")
  slopes <- gsub("[[:space:]]", "", slopes)

  my_priors <- c(
    prior_string("normal(-0.5, 0.1)", class = "b", coef = intercepts),
    prior_string("normal(0, 0.05)", class = "b", coef = slopes),
    prior(student_t(3, 0, 2), class = "sd"))

  m <- brm(
    rt ~  0 + d_feature + log(N_T+1):d_feature + (log(N_T+1):d_feature|p_id),
    data = df,
    family = lognormal(link = "identity"),
    prior = my_priors,
    iter = 5000)
   
  return(m)
}

my_models <- map(unique(d$exp_id), fit_gxlmm_to_an_exp, d)

plot_model_fits_ex <- function(df, experiment, m) {

 df %>%
    filter(
      exp_id == experiment, N_T >0,
      p_id %in% c("1a-1", "1a-2", "1a-3", "1a-4", "1a-5")) %>%
    mutate(
      d_feature = fct_drop(d_feature),
      p_id = fct_drop(p_id)) -> d_plt
  
  d_plt %>%
    modelr::data_grid(p_id, N_T= seq(1,33,4), d_feature) %>%
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
    scale_y_log10("reaction time") -> plt

  ggsave("exp1_fits.png", plt, width = 8, height = 4)

}


extract_fixed_slopes_from_model <- function(exp_n, ms, df) {

  experiment <- unique(d$exp_id)[exp_n]
  m <- ms[[exp_n]]

  vars <- get_variables(m)
  slopes <- str_subset(vars, "b_d_[a-z]*:")

  samples <- posterior_samples(m, slopes, 
    subset=runif(1000, 0, 10000)) %>%
   pivot_longer(starts_with("b_d"), names_to = "d_feature", values_to = "D") %>%
   mutate(
    exp_id = experiment,
    d_feature = as_factor(d_feature)) %>%
   select(exp_id, d_feature, D)

    levels(samples$d_feature) <- str_extract(
      levels(samples$d_feature), 
      "(?<=feature)[a-z]+(?=:logN_TP1)")

   return(samples)

}

# s <- extract_fixed_slopes_from_model(1, my_models, d)

exp_D <- map_df(1:length(my_models), extract_fixed_slopes_from_model, my_models, df = d)

  ggplot(exp_D, aes(x = D, fill = d_feature)) + 
  geom_density(alpha = 0.333) +
   facet_wrap(~ exp_id)
     
  

calc_D_overall <- function(f, D)
{
  f1 <- word(f, 1)
  f2 <- word(f, 2)

  D1 = as.numeric(filter(D, d_feature == f1)$D)
  D2 = as.numeric(filter(D, d_feature == f2)$D)

  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  sqrt(1/((1/D1^2) + (1/D2^2)))
    
  return(list(
    d_feature = gsub("[[:space:]]", "", f),
    "best_feature" = D_best_feature, 
    "orthog_contrast" = D_orth_contrast, 
    "collinear" = D_collinear))
}

gen_exp_predictions <- function(e_id) {
  
  df <- filter(d, exp_id == e_id, N_T > 0) %>%
  mutate(d_feature = fct_drop(d_feature))

  e_n = parse_number(e_id)
  D <- filter(exp_D, parse_number(exp_id) == e_n - 1)

  d_out <- tibble(
    exp_id = e_id,
    map_dfr(levels(df$d_feature), calc_D_overall, D)) %>%
  pivot_longer(
    cols = c(best_feature, orthog_contrast, collinear),
    values_to = "D_pred",
    names_to = "method") %>%
  group_by(d_feature, method)%>%
  mean_hdi(D_pred) %>%
  mutate(exp_id = e_id) %>%
  select(exp_id, d_feature, method, D_pred, .lower, .upper)

  return(d_out)
}

# Predict experiments
pred_D <- map_df(c("2a", "2b", "2c", "4a", "4b", "4c"), gen_exp_predictions)
 
# recreate fig 4 (top right)
exp_D %>% group_by(exp_id, d_feature) %>% 
mean_hdi(D) %>%
rename(D_lower = ".lower", D_upper = ".upper") %>% 
right_join(pred_D, by = c("exp_id", "d_feature")) %>%
select(-.width, -.point, -.interval) -> d_D 

ggplot(d_D, aes(x = D_pred,, y = D)) + 
geom_abline(linetype = 2) + 
  geom_linerange(aes(ymin = D_lower, ymax = D_upper), alpha = 0.5) + 
  geom_linerange(aes( xmin = .lower, xmax = .upper), alpha = 0.5) + 
  facet_wrap(~method) + theme_bw() +
  coord_fixed()
  ggsave("Bayesian_fig4.png", width = 8, height = 3)

pred_D %>%
  pivot_longer(
    cols = c(`best feature`, `orthog. contrast`, collinear),
    values_to = "D_pred",
    names_to = "method") %>%
  ggplot(aes(x = D_pred, y = D, colour = d_feature)) + geom_point() + geom_abline(linetype = 2) +
  geom_smooth(method = "lm") + facet_wrap(~ method)
ggsave("recreate_fig_4.pdf")


# Look at indiv differences

calc_D_per_person_feature <- function(p, df) {

  df <- filter(df, p_id == p) 

  bind_rows(
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[2]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[3]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[4]),
    filter(df, N_T>0)) %>%
    mutate(d_feature = as_factor(d_feature)) -> df

  m <- lm(rt ~  0 + d_feature + log(N_T+1):d_feature, df)
  coef_tab <- summary(m)$coefficients

  d_out <- tibble(
    experiment = unique(df$exp_number),
    p_id = p,
    d_feature = levels(df$d_feature),
    D = c(coef_tab[4:6,1]))

  return(d_out)
}

calc_D_indiv_diff <- function(df) {

  return(map_dfr(
    unique(df$p_id), 
    calc_D_per_person_feature, 
    df))
}

D_indiv <- map_dfr(d, calc_D_indiv_diff)

D_indiv %>% ggplot(aes(x = D, y = d_feature)) + geom_boxplot(alpha = 0.5) + facet_wrap(~experiment) 

#predict RT 

# L indicates the number of distractor types present in the display,
# NT is the total number of distractors,
# Ni is the number of distractors of type i, 
# Dj indicates the logarithmic slope parameters associated 
# with distractor of type j (organized from smallest D1 to largest DL). 
# Note that the D parameter is the one that increases with
# increasing target-distractor similarity.

# The constant a represents the reaction time when the target is alone in the display. Inter-item
# interactions were indexed by the multiplicative factor β. Finally, the index function 1[2, ∞) (j) indicates that the
# sum over Ni only applies when there are at least two different types of lures in the display (j > 1). When j = 1, the
# second sum is zero.


extract_a_value <- function(e_id) {
  
d %>% filter(parse_number(exp_id) == parse_number(e_id), N_T == 0) %>% 
	group_by(exp_id, p_id) %>%
  	summarise(mean_rt = mean(rt), .groups = "drop") %>%
  	summarise(a = mean(mean_rt)) -> a

  return(a$a)
}

extract_L_value <- function(e_id) {
	L <- length(unique(filter(d, exp_id == e_id, N_T != 0)$d_feature))
	return(L)
}

extract_D <- function(e_id) {

	D <- filter(pred_D, exp_id == e_id) %>% arrange(collinear)
	
	# D <- filter(d, exp_id == e_id, N_T > 0, trial == t, p_id == p) %>% 
	# 	group_by(d_feature) %>% 
	# 	summarise(N_i = n(), .groups = "drop") %>% 
	# 	right_join(D, by = "d_feature")

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

exps2predict = c("2a", "2b", "2c", "4a", "4b", "4c")

rt_pred <- map_dfr(exps2predict, predict_rt)

d %>% filter(exp_id %in% exps2predict) %>%
	group_by(exp_id, p_id, d_feature) %>%
	summarise(mean_rt = mean(rt), .groups = "drop") %>%
	group_by(exp_id,  d_feature) %>%
	summarise(mean_rt = mean(mean_rt), .groups = "drop") %>%
	left_join(rt_pred) %>% 
	ggplot(aes(x = p_rt, y = mean_rt)) + geom_point(alpha = 0.5)

#### Some raw data graphs (should be tidied up into a function at some point - or just removed...)

#### e1a ####

#do some simple counts... does these numbers match those in the paper?
# d = 0 is target only condition

d$e1a %>% group_by(p_id, d_feature) %>%
summarise(trials = n(),
	mean_rt = mean(rt)) 

# facet plot of all the correct RTs

d$e1a %>% 
	ggplot(
		aes(x = N_T, y = log(rt), colour = d_feature)) + 
	geom_jitter(alpha = 0.25) + 
	geom_smooth(method = "lm", se = F) + 
	facet_wrap(~ p_id) + 
	scale_colour_manual(values = c("grey50", "darkorange3", "dodgerblue2", "yellow3"))

# show individual differences in search slopes 
d$e1a %>% 
	ggplot(
		aes(x = N_T, y = log(rt), colour = d_feature, group = p_id)) + 
	geom_smooth(method = "lm", se = T) +
	facet_wrap(~ d_feature) + 
	scale_colour_manual(values = c("darkorange3", "dodgerblue2", "yellow3"))	


#### e1b ####
# participant 19 looks a bit weird?

d$e1b %>% group_by(p_id, d) %>%
  summarise(trials = n(),
            mean_rt = mean(rt)) 

d$e1b %>% ggplot(aes(x = N_T, y = log(rt), colour = d)) + 
  geom_jitter(alpha = 0.25) + 
  geom_smooth(method = "lm", se = F) + 
  facet_wrap(~ p_id) + 
  scale_colour_manual(values = c("grey50", "darkorange3", "yellow3", "dodgerblue2"))	

# show individual differences in search slopes 
d$e1b %>% ggplot(aes(x = N_T, y = log(rt), colour = d, group = p_id)) + 
  geom_smooth(method = "lm", se = T) +
  facet_wrap(~ d) + 
  scale_colour_manual(values = c("darkorange3", "yellow3", "dodgerblue2"))	

#### e2a ####

d$e2a %>% group_by(p_id, d) %>%
  summarise(trials = n(),
            mean_rt = mean(rt)) 

d$e2a %>% ggplot(aes(x = N_T, y = log(rt), colour = d)) + 
  geom_jitter(alpha = 0.25) + 
  geom_smooth(method = "lm", se = F) + 
  facet_wrap(~ p_id) + 
  scale_colour_manual(values = c("grey50", "darkorange3", "dodgerblue2", "yellow3"))	

# show individual differences in search slopes 
d$e2a %>% ggplot(aes(x = N_T, y = log(rt), colour = d, group = p_id)) + 
  geom_smooth(method = "lm", se = T) +
  facet_wrap(~ d) + 
  scale_colour_manual(values = c("darkorange3", "dodgerblue2", "yellow3"))	

#### e2b ####

d$e2b %>% group_by(p_id, d) %>%
  summarise(trials = n(),
            mean_rt = mean(rt)) 

d$e2b %>% ggplot(aes(x = N_T, y = log(rt), colour = d)) + 
  geom_jitter(alpha = 0.25) + 
  geom_smooth(method = "lm", se = F) + 
  facet_wrap(~ p_id) + 
  scale_colour_manual(values = c("grey50", "darkorange3", "yellow3", "dodgerblue2"))	

# show individual differences in search slopes 
d$e2b %>% ggplot(aes(x = N_T, y = log(rt), colour = d, group = p_id)) + 
  geom_smooth(method = "lm", se = T) +
  facet_wrap(~ d) + 
  scale_colour_manual(values = c("darkorange3", "yellow3", "dodgerblue2"))	

#### e2c ####

d$e2c %>% group_by(p_id, d) %>%
  summarise(trials = n(),
            mean_rt = mean(rt)) 

d$e2c %>% ggplot(aes(x = N_T, y = log(rt), colour = d)) + 
  geom_jitter(alpha = 0.25) + 
  geom_smooth(method = "lm", se = F) + 
  facet_wrap(~ p_id) + 
  scale_colour_manual(values = c("grey50", "dodgerblue2", "yellow3", "darkorange3"))	

# show individual differences in search slopes 
d$e2c %>% ggplot(aes(x = N_T, y = log(rt), colour = d, group = p_id)) + 
  geom_smooth(method = "lm", se = T) +
  facet_wrap(~ d) + 
  scale_colour_manual(values = c("dodgerblue2", "yellow3", "darkorange3"))	
