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
		n = "numd",
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

d$e1a <- import_experiment(2,  c(orange = "1", yellow = "2", blue = "3"))
d$e1b <- import_experiment(4,  c(diamond = "1", circle = "2", triangle = "3"))
d$e2a <- import_experiment(6,  c(`orange diamond` = "1", `blue circle` = "2", `yellow triangle` = "3"))
d$e2b <- import_experiment(8,  c(`orange circle` = "1", `yellow diamond` = "2", `blue triangle` = "3"))
d$e2c <- import_experiment(10, c(`blue diamond` = "1", `yellow circle` = "2", `orange triangle` = "3"))


#do some simple counts... does these numbers match those in the paper?

d$e1a %>% group_by(p_id, d_feature) %>%
summarise(trials = n(),
	mean_rt = mean(rt))

# facet plot of all the correct RTs

d$e1a %>% 
	ggplot(
		aes(x = n, y = log(rt), colour = d_feature)) + 
	geom_jitter(alpha = 0.25) + 
	geom_smooth(method = "lm", se = F) + 
	facet_wrap(~ p_id) + 
	scale_colour_manual(values = c("grey50", "darkorange3", "yellow3", "dodgerblue2"))	

# show individual differences in search slopes 
d$e1a %>% 
	ggplot(
		aes(x = n, y = log(rt), colour = d_feature, group = p_id)) + 
	geom_smooth(method = "lm", se = T) +
	facet_wrap(~ d_feature) + 
	scale_colour_manual(values = c("darkorange3", "yellow3", "dodgerblue2"))	




