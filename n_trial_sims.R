library(tidyverse)
# sampling from a log normal estiamte acc sim

source("analysis_revised/scripts/import_and_tidy.R")
summary(d)

mu <- 6.315
sigma <- 0.319

do_calc <- function(n, mu, sigma) {
  
  samples <- rlnorm(n, mu, sigma)
  
  return(tibble(n = n,
                mean_rt = mean(samples),
                mean_log_rt = mean(log(samples)),
                median_rt = median(samples)))
  
}


d <- map_dfr(rep(seq(6,40, by = 2), each = 1000), do_calc, mu, sigma)

 gt <- tibble(summary = c("mean_log_rt", "mean_rt", "median_rt"),
              ground_truth = c(mu, exp(mu + (sigma^2)/2), 526))


d %>% pivot_longer(-n, names_to = "summary", values_to = "stat") %>%
  full_join(gt) -> d


d %>%
  ggplot(aes(n, stat)) + 
  tidybayes::stat_lineribbon(alpha = 0.5) + 
  facet_wrap(~summary, scales = "free") + 
  geom_hline(data = gt, aes(yintercept = ground_truth), linetype = 2)
  
  
d %>% mutate(abs_err = abs(stat - ground_truth)) %>%
  ggplot(aes(n, abs_err)) + 
  tidybayes::stat_lineribbon(alpha = 0.5) +
  facet_wrap(~summary)
  
