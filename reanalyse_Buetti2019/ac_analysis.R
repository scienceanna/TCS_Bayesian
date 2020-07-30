library(tidyverse)
library(readxl)

# Experiment 1

read_excel(
	"../previous_work/Buetti2019_data_code/OSF_originaldata.xlsx", 
	sheet = 2) %>%
	# use tidier variable names
	select(
		p_id = "Subject",
		trial = "Trial",
		t_id = "tid",
		n = "numd",
		colour = "dcolors",
		rt = "RT",
		response = "resp",
		error = "Error") %>%
	# code up p_id, t_id and distracter colour as a factor
	mutate(
		p_id = as_factor(p_id),
		colour = as_factor(colour),
		colour = fct_recode(colour, 
			orange = "1", yellow = "2", blue = "3", none = "0"),
		t_id = as_factor(t_id),
		t_id = fct_recode(t_id, left = "0", right = "1")) %>%
	# remove error trials
	filter(error == 0) -> d

#do some simple counts... does these numbers match those in the paper?

d %>% group_by(p_id, colour) %>%
summarise(trials = n(),
	mean_rt = mean(rt))

# facet plot of all the correct RTs

d %>% ggplot(aes(x = n, y = log(rt), colour = colour)) + 
	geom_jitter(alpha = 0.25) + 
	geom_smooth(method = "lm", se = F) + 
	facet_wrap(~ p_id) + 
	scale_colour_manual(values = c("grey50", "darkorange3", "yellow3", "dodgerblue2"))	

# show individual differences in search slopes 
d %>% ggplot(aes(x = n, y = log(rt), colour = colour, group = p_id)) + 
	geom_smooth(method = "lm", se = T) +
	facet_wrap(~ colour) + 
	scale_colour_manual(values = c("darkorange3", "yellow3", "dodgerblue2"))	




