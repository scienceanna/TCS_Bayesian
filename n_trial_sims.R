library(tidyverse)
# sampling from a log normal estiamte acc sim

#source("analysis_revised/scripts/import_and_tidy.R")
summary(d)

mu <- 6.315
sigma <- 0.319

do_calc <- function(n, mu, sigma) {
  
  samples <- rlnorm(n, mu, sigma)
  
  return(tibble(n = n,
                mean_rt = mean(samples),
                mean_log_rt = mean(log(samples))))
  
}


d <- map_dfr(rep(c(10, 12, 15, 20, 30, 40), each = 10000), do_calc, mu, sigma)

gt <- tibble(summary = c("mean_log_rt", "mean_rt"),
              ground_truth = c(mu, exp(mu + (sigma^2)/2)))


d %>% pivot_longer(-n, names_to = "summary", values_to = "stat") %>%
  full_join(gt) -> d


d %>%
  ggplot(aes(n, stat)) + 
  tidybayes::stat_lineribbon(alpha = 0.5) + 
  facet_wrap(~summary, scales = "free") + 
  geom_hline(data = gt, aes(yintercept = ground_truth), linetype = 2)
  
  
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
 
  
