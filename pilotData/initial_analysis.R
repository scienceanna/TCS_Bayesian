library(ggplot2)
library(tidyr)
library(dplyr)
library(plyr)
library(readr)
library(tidyverse)
library(knitr)
library(kableExtra)
library(Rmisc)

mydir=setwd("C:/Users/Marcin/Documents/GitHub/APP_VS/pilotData/pilot_alasdair_student")

myfiles = list.files(path=mydir, pattern="*.csv", full.names=TRUE)
dat_csv = ldply(myfiles, read_csv)
dat_csv %>% dplyr::select(rt="key_resp_2.rt",accuracy="key_resp_2.corr",experiment="exp",col="colour",observer="participant",
                          n="trials.thisTrialN",distNo="distNo",observer="participant",targSide="targ_side")%>%
             dplyr::filter(n>20)%>%#we exclude 20 practice trials
                    dplyr::mutate(observer= as.factor(observer),
                                  experiment= as.factor(experiment),
                                  targSide= as.factor(targSide),
                                  distNo= as.factor(distNo))->totalDat
write.table(totalDat, "accuracy_rt_data.txt", sep=",",row.names = F)

  