library(tidyverse)


# reduce the number of decimal places
options(digits = 3)

# functions used for our Bayesian re-analysis
source("../scripts/our_functions.R")

# set seed to make sure everything is reproducible 
set.seed(100320021)


d <- read_csv("../../data/pilot/accuracy_rt_data.txt") %>%
  filter(!is.na(rt)) %>%
  mutate(
         observer = as_factor(observer),
         colour = as_factor(colour),
         nd = no_distractors) %>%
  select(observer, experiment, colour, nd, accuracy, rt)


# check acc is ok
d %>% group_by(observer, experiment, colour, nd) %>%
  summarise(acc = mean(accuracy)) %>%
  ggplot(aes(x = observer, y = acc, fill = as_factor(nd))) +
  geom_col(position = position_dodge())+
  facet_wrap(~experiment)

# remove incorrect trials
d <- filter(d, accuracy == 1)

# remove 1st and 100th percentile RT
d %>% filter(
  rt > quantile(rt, 0.01), 
  rt < quantile(rt, 0.99)) -> d

# Replicate nD=0 trials and remove outliers
d <- bind_rows(filter(d, nd != 0),
               filter(d, nd == 0) %>% mutate(colour = "1"),
               filter(d, nd == 0) %>% mutate(colour = "2"),
               filter(d, nd == 0) %>% mutate(colour = "3")) %>%
  mutate(lnd = log(nd+1))


# tidy up experiment and feature labels
d %>% mutate(exp = parse_number(experiment)) %>%
  unite(feature, experiment, colour) %>%
  mutate(
    feature = str_replace_all(feature, "1a_1", "orange"),
    feature = str_replace_all(feature, "1a_2", "pink"),
    feature = str_replace_all(feature, "1a_3", "purple"),
    feature = str_replace_all(feature, "1b_1", "circle"),
    feature = str_replace_all(feature, "1b_2", "diamond"),
    feature = str_replace_all(feature, "1b_3", "triangle"),
    feature = str_replace_all(feature, "2a_1", "pink circle"),
    feature = str_replace_all(feature, "2a_2", "orange diamond"),
    feature = str_replace_all(feature, "2a_3", "purple triangle"),
    feature = str_replace_all(feature, "2b_1", "orange circle"),
    feature = str_replace_all(feature, "2b_2", "purple diamond"),
    feature = str_replace_all(feature, "2b_3", "pink triangle"),
    feature = str_replace_all(feature, "2c_1", "purple circle"),
    feature = str_replace_all(feature, "2c_2", "pink diamond"),
    feature = str_replace_all(feature, "2c_3", "orange triangle"),
    feature = as_factor(feature)) -> d


# split into training and set sets

d1 <- filter(d, exp == 1) %>% 
  select(-exp)

d2 <- filter(d, exp == 2) %>%
  separate(feature, into = c("feature1", "feature2"))  %>% 
  select(-exp)


rm(d)


