library(tidyverse)
library(extraDistr)
library(fitdistrplus)

#source("../scripts/import_and_tidy.R")

n <- 10000

mu <- 0.250
lambda <- 1

rt <- rwald(n, mu, lambda) 

hist(rt)




fln <- fitdist(rt, "lnorm")



x <- seq(0, 1, 0.01)

d <- tibble(x = x, 
            wald = dwald(x, mu, lambda),
            lognormal = dlnorm(x, fln$estimate["meanlog"], fln$estimate["sdlog"])) 


ggplot(d, aes(wald, lognormal)) + 
  geom_point() + 
  geom_abline(linetype  =2 )



 d %>%
  pivot_longer(-x, values_to = "y", names_to = "distribution") %>%
  ggplot(aes(x = x, y = y, colour = distribution)) +
  geom_path(alpha = 0.4, size = 2)

