
library(tidyr)
#library(dplyr)
library(plyr)
library(tidyverse)
library(knitr)
library(kableExtra)
library(Rmisc)

#mydir=setwd("C:/Users/s03an7/Desktop/data_cortex_pilot/data")
mydir = getwd()

myfiles = list.files(path=mydir, pattern="*.csv", full.names=TRUE)
dat_csv = ldply(myfiles, read_csv)
data_cortex<-dat_csv %>% dplyr::select(imageFile="ImageFile",rt="buttonBox_12.rt",feature="colour",targ_side="targ_side",
                          n="trials.thisTrialN",observer="participant",correct_key="correctAnswer",key_pressed="buttonBox_12.keys",accuracy="buttonBox_12.corr", distractor_no="distNo", target_type="targetType")%>%
                         filter(n >= 0)

data_cortex_wrangled <- data_cortex %>%
  mutate(imageFileName = imageFile) %>%
  separate(imageFile, c(NA, "interim"), sep  = "/") %>%
  separate(interim, "exp", sep = "_", extra = "drop") %>%
  mutate(block = str_remove(exp, "exp")) %>%
  select(-exp) %>%
  select(imageFileName, observer, block, feature, n, distractor_no, rt, accuracy)
  


write.table(data_cortex_wrangled, "accuracy_rt_data.txt", sep=",",row.names = F)

