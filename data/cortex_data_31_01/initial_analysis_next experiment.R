library(ggplot2)
library(tidyr)
library(dplyr)
library(plyr)
library(readr)
library(tidyverse)
library(knitr)
library(kableExtra)
library(Rmisc)

mydir=setwd("C:/Users/Marcin/Documents/GitHub/pilot_three_search_tasks")

myfiles = list.files(path=mydir, pattern="*.csv", full.names=TRUE)
dat_csv = ldply(myfiles, read_csv)
dat_csv %>% dplyr::select(rt="key_resp.rt",accuracy="key_resp.corr",targetType="targetName",difficulty="difficulty",
                          n="trials.thisTrialN",observer="participant",targPresent="targPres")%>%
                         filter(n >= 0)%>%
                    dplyr::mutate(targetType = fct_recode(targetType, greenVertical = "greenverival",tex="texture"),
                                  difficulty = fct_recode(difficulty, hard = "hard",  mid= "mid",easy="easy"),
                                  observer= as.factor(observer),
                                  targetType= as.factor(targetType),
                                  difficulty= as.factor(difficulty))->totalDat
write.table(totalDat, "accuracy_rt_data.txt", sep=",",row.names = F)

totalDat %>% group_by(targetType, difficulty,targPresent) %>%
  dplyr::summarise(rt = mean(rt), .groups = 'drop')%>%
  dplyr::mutate(difficulty = factor(difficulty, levels=c("easy", "mid", "hard")))%>%
   ggplot(aes(x = targetType, y = rt, colour=difficulty)) +
  geom_boxplot(alpha = 0.25) +
  geom_jitter( size=0.4, alpha=0.9, width = 0.10) +
  theme_bw() +
  scale_y_continuous(limits = c(0, 7), name="accuracy (%)")->rt_plot
ggsave("rt.png", rt_plot, width = 6, height = 6)

  knitr::kable("simple",caption="accuracy data")
write.table(acc_wide, "accuracy_summary.txt", sep=",",row.names = F)

totalDat %>% group_by(targetType,observer,difficulty) %>%
  dplyr::mutate(difficulty = factor(difficulty, levels=c("easy", "mid", "hard")))%>%
  dplyr::summarise(accuracy = mean(rt), .groups = 'drop') %>%
  ggplot(aes(x = targetType, y = accuracy*100, colour=difficulty)) +
  geom_boxplot(alpha = 0.25) +
  geom_jitter( size=0.4, alpha=0.9, width = 0.10) +
  theme_bw() +
  scale_y_continuous(limits = c(0, 100), name="accuracy (%)")-> p_acc_targPres
ggsave("plots/accuracy.png", p_acc_targPres, width = 6, height = 6)

#reaction time data
#Exclusions 
#Remove from RT analysis all RTs >3 seconds, and all incorrect RTs
#Any person with >15% of trials with RTs >3s
#Any person with >15% error rate:  subject 25
#calculate z score
totalDat %>% 
  filter( accuracy == 1)%>%
  dplyr::mutate(difficulty = factor(difficulty, levels=c("easy", "mid", "hard")))%>%
  group_by(difficulty, targetType,targPresent) %>%
  mutate(z_score = (rt-mean(rt))/sd(rt))-> z_transformed

#summarydata<-summarySEwithin(z_transformed,measurevar = "z_score", withinvars = c("difficulty","targetType","targPresent"), idvar = "observer")

#graph of RT
z_transformed %>% 
  filter( 
     accuracy == 1)%>%
  dplyr::mutate(difficulty = factor(difficulty, levels=c("easy", "mid", "hard")))->dataS
summarydata<-summarySEwithin(dataS,measurevar = "rt", withinvars = c("difficulty","targetType","targPresent"), idvar = "observer")
#rt_ci   = 1.96 * sd(rt)/sqrt(n()))%>%

ggplot(dataS, aes(x=difficulty, y = z_score, group=targPresent)) +
  geom_boxplot(size=1)+
  #geom_errorbar(aes(ymin=z_score-ci, ymax=z_score+ci), width=.2,
   #             position=position_dodge(.1))+
  facet_wrap(~targetType)->rt_slope_2#+ theme(legend.position=c(0.88,0.19))
 
ggsave("plots/z_transformed.png", rt_slope_2, width = 6, height = 4)  

totalDat %>% group_by(targetType,observer) %>%
  dplyr::summarise(accuracy = median(rt), .groups = 'drop')%>%
  pivot_wider(names_from = targetType, values_from = accuracy)->data_corr

cor.test(data_corr$greenVertical,data_corr$line)
cor.test(data_corr$greenVertical,data_corr$texture)
cor.test(data_corr$line,data_corr$texture)
