library(tidyverse)


# reduce the number of decimal places
options(digits = 3)

# functions used for our Bayesian re-analysis
source("../scripts/our_functions.R")

# set seed to make sure everything is reproducible 
set.seed(100320021)


d <- read_csv("../../data/cortex_data_31_01/accuracy_rt_data.txt", show_col_types = F) %>%
  filter(!is.na(rt)) %>%
  mutate(
         colour = as_factor(feature),
         nd = distractor_no) %>%
  select(observer, experiment = "block", colour, nd, accuracy, rt)

# fix observer varaible... 1 should be 01
# also change to a factor
d %>% mutate(observer = if_else(observer=="1", "01", observer),
             observer = as_factor(observer)) -> d
  

# check acc is ok
d %>% group_by(observer, experiment, colour, nd) %>%
  summarise(acc = mean(accuracy), .groups = "drop") %>%
  ggplot(aes(x = observer, y = acc, fill = as_factor(nd))) +
  geom_col(position = position_dodge())+
  facet_wrap(~experiment)

# check that all participants average response time falls within
# plus/minus 2sd from group mean.
d %>% group_by(observer) %>%
  summarise(rt = mean(rt)) -> drt

meanrt = mean(drt$rt)
sdrt = sd(drt$rt)

filter(drt, rt > meanrt + 2* sdrt)
filter(drt, rt < meanrt - 2* sdrt)

d <- filter(d, observer != 19)

rm(drt, meanrt, sdrt)

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
  select(-exp) %>%
  mutate(feature = fct_drop(feature))

d2 <- filter(d, exp == 2) %>%
  separate(feature, into = c("feature1", "feature2"))  %>% 
  select(-exp)

rm(d)