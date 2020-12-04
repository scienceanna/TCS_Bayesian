library(tidyverse)
library(readxl)

import_experiment <- function(sheet, d_labels, exp_number, exp_part) {
  
  read_excel(
    #"C:/Users/Anna/Documents/APP_VS_git/previous_work/Buetti2019_data_code/OSF_originaldata_corrected.xlsx",
    "../previous_work/Buetti2019_data_code/OSF_originaldata_corrected.xlsx", 
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
      d_feature = as_factor(d_feature),
      d_feature = fct_recode(d_feature, !!!d_labels),
      d_feature = fct_recode(d_feature, "no distractors" = "0"),
      t_id = as_factor(t_id),
      t_id = fct_recode(t_id, left = "0", right = "1"))  -> d
  
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

d <- bind_rows(d)

# # remove error trials and very very short responses
# print(dim(d))
 d <- d %>%
   filter(error == 0) #%>%
#   filter(rt > quantile(d$rt, 0.01), rt < quantile(d$rt, 0.99))  


account_for_zero_distracters <- function(experiment)
{
  # Little helper function to sort out the quirk with N_T = 0
  # i.e, in this case, d_feature is undefined
  # So, well, copy this row once for each value of d_feature
  
  d %>% filter(exp_id == experiment) %>%
    mutate(d_feature = as.character(d_feature)) -> df
  
  df_no_distarcors <- filter(df, N_T == 0)
  df <- filter(df, N_T > 0)
  
  for (lvl in unique(df$d_feature))
  { 
    no_dist_lvl <- df_no_distarcors %>% mutate(d_feature = lvl)
    df <- bind_rows(df, no_dist_lvl)
  }
  
  return(df)
}


d <- map_dfr(unique(d$exp_id), account_for_zero_distracters)


# this changes the exp ids
#d %>% mutate(
#  exp_id = parse_number(exp_id)) -> d

rm(account_for_zero_distracters, import_experiment)

