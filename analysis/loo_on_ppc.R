library(tidyverse)
library(brms)


d <- tibble(x = runif(100, -10, 10),
            y = x + rnorm(100, 0, 1))

plot(d$x, d$y)

my_prior <- c(
  prior_string("normal(0, 1)", class = "Intercept"),
  prior_string("normal(0, 1)", class = "b"),
  prior_string("cauchy(0, 0.1)", class = "sigma"))

m <- brm(
  y ~ x, 
  data = d,
  prior = my_prior,
  sample_prior = "only",
  save_pars("all"))


loo(m)
