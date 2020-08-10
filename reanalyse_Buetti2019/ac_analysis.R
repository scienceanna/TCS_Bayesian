library(tidyverse)
library(readxl)

import_experiment <- function(sheet, d_labels) {

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
		p_id = as_factor(p_id),
		d_feature = as_factor(d_feature),
		d_feature = fct_recode(d_feature, !!!d_labels),
		t_id = as_factor(t_id),
		t_id = fct_recode(t_id, left = "0", right = "1")) %>%
	# remove error trials
	filter(error == 0) -> d

	return(d)
}

d <- list()

d$e1a <- import_experiment(2,  c(orange = "1", blue = "2", yellow = "3"))
d$e1b <- import_experiment(4,  c(diamond = "1", circle = "2", triangle = "3"))
d$e2a <- import_experiment(6,  c(`orange diamond` = "1", `blue circle` = "2", `yellow triangle` = "3"))
d$e2b <- import_experiment(8,  c(`orange circle` = "1", `yellow diamond` = "2", `blue triangle` = "3"))
d$e2c <- import_experiment(10, c(`blue diamond` = "1", `yellow circle` = "2", `orange triangle` = "3"))
d$e3a <- import_experiment(12, c(orange = "1", blue = "2", yellow = "3"))
d$e3b <- import_experiment(14, c(diamond = "1", circle = "2", semicircle = "3"))
d$e4a <- import_experiment(16, c(`orange diamond` = "1", `blue circle` = "2", `yellow semicircle` = "3"))
d$e4b <- import_experiment(18, c(`orange circle` = "1", `yellow diamond` = "2", `blue semicircle` = "3"))
d$e4c <- import_experiment(20, c(`blue diamond` = "1", `yellow circle` = "2", `orange semicircle` = "3"))


calc_D_per_feature <- function(df) {

  df %>%
    group_by(p_id, d_feature, N_T) %>%
    summarise(mean_rt = mean(rt), .groups = "drop") -> df

  bind_rows(
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[2]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[3]),
    filter(df, N_T==0) %>% mutate(d_feature = levels(df$d_feature)[4]),
    filter(df, N_T>0)) %>%
    mutate(d_feature = as_factor(d_feature)) -> df

  m <- lm(mean_rt ~  0 + d_feature + log(N_T+1):d_feature, df)
  coef_tab <- summary(m)$coefficients

  d_out <- tibble(
    d_feature = levels(df$d_feature),
    D = c(coef_tab[4:6,1]))

  return(d_out)
}

exp_D <- map_dfr(d, calc_D_per_feature)
# 2C, 3A, 4A numbers look slightly off 

calc_D_overall <- function(f, D = exp_D)
{
  f1 <- word(f, 1)
  f2 <- word(f, 2)

  # Collinear contrast integration model.
  D1 = filter(D, d_feature == f1)$D
  D2 = filter(D, d_feature == f2)$D
  D_overall = 1/((1/D1) + (1/D2))
  return(as.numeric(D_overall))
}

gen_exp_predictions <- function(df) {

  d_out <- tibble(
  d_feature = levels(df$d_feature)[2:4], 
  model = "collinear contrast integration model",
  D_p = map_dbl(levels(df$d_feature)[2:4], calc_D_overall))

  return(d_out)
}

# Predict Exp2a
pred_D <- map_df(d[3], gen_exp_predictions)

left_join(pred_D, exp_D, by = "d_feature") %>%
  ggplot(aes(x = D_p, y = D)) + geom_point()

# does this look correct? 
a <- mean(filter(d$e2a, N_T == 0)$rt)




#predict RT for 

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
