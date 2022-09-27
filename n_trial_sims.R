library(tidyverse)
library(patchwork)
# sampling from a log normal estiamte acc sim

#source("analysis_revised/scripts/import_and_tidy.R")
summary(d)

mu <- 6.315
sigma <- 0.32

do_calc <- function(n, mu, sigma) {
  
  samples <- rlnorm(n, mu, sigma)
  
  return(tibble(n = n,
                mean_rt = mean(samples),
                mean_log_rt = mean(log(samples)),
                sd_log = sd(log(samples))))
  
}


d <- map_dfr(rep(c(10, 12, 15, 20, 30, 40, 50, 60), each = 10000), do_calc, mu, sigma)

rt <- 0:1500

dplot <- filter(d, n == 20)[1:25, ]


dplt_gt <- tibble(x = rt, y = dlnorm(rt, 6.315, 0.32))
plt <- ggplot(dplt_gt, aes(x, y)) + geom_path(size = 2)


for (i in 1:25) {
  dplt_gt <- tibble(x = rt, y = dlnorm(rt, dplot$mean_log_rt[i], dplot$sd_log[i]))
  plt <- plt + geom_path(data = dplt_gt, colour = "blue", alpha = 0.25)
  
}

plt <- plt + theme_bw() +
  scale_y_continuous("density") + 
  scale_x_continuous("reaction time")

gt <- tibble(summary = c("mean_rt"),
              ground_truth = c(exp(mu + (sigma^2)/2)))



d %>% select(n, mean_rt) %>%
  pivot_longer(-n, names_to = "summary", values_to = "stat") %>%
  full_join(gt) -> d


d %>%
  ggplot(aes(n, stat)) + 
  tidybayes::stat_lineribbon(alpha = 0.25, fill = "blue") + 
  geom_hline(data = gt, aes(yintercept = ground_truth), linetype = 2) +
  theme_bw() +
  scale_y_continuous("reaction time") -> plt2

plt + plt2
ggsave("n_trials.pdf", width = 8, height = 4)
  
  
d %>% mutate(err = (stat - ground_truth)) %>%
  group_by(n, summary) %>%
  summarise(err0.05 = quantile(err, 0.05),
            err0.25 = quantile(err, 0.25),
            err0.75 = quantile(err, 0.75),
            err0.95 = quantile(err, 0.95)) %>%
  filter(summary == "mean_rt") %>%
  select(-summary) -> derr

derr$err0.05 <- derr$err0.05/max(derr$err0.05)
derr$err0.25 <- derr$err0.25/max(derr$err0.25)
derr$err0.75 <- derr$err0.75/min(derr$err0.75)
derr$err0.95 <- derr$err0.95/min(derr$err0.95)


derr %>%
  knitr::kable(digits = 2)
 



  
