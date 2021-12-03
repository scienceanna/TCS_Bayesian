library(tidyverse)
library(brms)


d <- read_csv("../data_exp_in_the_lab/accuracy_rt_data.txt") %>%
  filter(!is.na(rt)) %>%
  mutate(experiment = as_factor(experiment),
         observer = as_factor(observer),
         colour = as_factor(colour),
         nd = no_distractors) %>%
  select(observer, experiment, colour, nd, accuracy, rt)

# what acc exclusion do we use?
# d %>% group_by(observer, experiment, colour, nd) %>%
#   summarise(acc = mean(accuracy)) %>% 
#   ggplot(aes(x = observer, y = acc, fill = as_factor(nd))) +
#   geom_col(position = position_dodge())+ 
#   facet_wrap(~experiment)

# qtake correct trials only and for the nd=0 factor fix

d <- filter(d, accuracy == 1)

d <- bind_rows(filter(d, nd != 0),
               filter(d, nd == 0) %>% mutate(colour = "1"),
               filter(d, nd == 0) %>% mutate(colour = "2"),
               filter(d, nd == 0) %>% mutate(colour = "3")) %>%
mutate(lnd = log(nd+1))

  
# d %>% group_by(observer, experiment, colour, nd) %>%
#   summarise(median_rt = median(rt)) %>% 
#   ggplot(aes(x = nd, y = median_rt, group = observer)) + 
#   geom_path() +
#   facet_grid(colour ~ experiment)
###########  

intercepts <- paste("experiment", levels(d$experiment), sep = "")

my_prior <- c(
      prior_string("normal(-0.5, 0.3)",  class = "b", coef = intercepts),
      prior_string("normal(0, 0.2)", class = "b"),
      prior_string("normal(-1, 0.5)", class = "Intercept", dpar = "ndt" ),
      prior_string("cauchy(0, 0.4)", class = "sigma")   )

my_formula <- bf(rt ~ 0 + experiment + colour:experiment:lnd,
	ndt ~ 1)


m <- brm(my_formula,
	family = "shifted_lognormal",
	data = (filter(d, observer != "11")),
		prior = my_prior)






