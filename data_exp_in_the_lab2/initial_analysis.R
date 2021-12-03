library(ggplot2)
library(tidyr)
library(dplyr)
library(plyr)
library(readr)
library(tidyverse)
library(knitr)
library(kableExtra)
library(Rmisc)

mydir=setwd("C:/Users/ah19679/Documents/GitHub/APP_VS/data_exp_in_the_lab2/data_increased")

myfiles = list.files(path=mydir, pattern="*.csv", full.names=TRUE)
dat_csv = ldply(myfiles, read_csv)
dat_csv %>% dplyr::select(rt="key_resp_2.rt",accuracy="key_resp_2.corr",experiment="exp",colour="colour",
                          n="trials.thisTrialN",observer="participant", no_distractors="distNo")%>%
                    
                    dplyr::mutate(observer= as.factor(observer),
                                  experiment= as.factor(experiment),
                                  colour= as.factor(colour))->totalDat
write.table(totalDat, "accuracy_rt_data.txt", sep=",",row.names = F)

