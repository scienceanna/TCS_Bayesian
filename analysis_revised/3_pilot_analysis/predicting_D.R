library(tidyverse)
library(brms)
library(tidybayes)

source("get_slopes_fun.R")

m1 <- readRDS("pilot1.model")
samples1 <- get_slopes(m1, 1)

m2 <- readRDS("pilot2.model") 
samples2 <- get_slopes(m2, 2)



calc_D <- function(feature1, feature2, observer) {
  
  obs = observer
  
  D1 <- filter(samples1, observer == obs, feature == feature1)$rD
  D2 <- filter(samples1, observer == obs, feature == feature2)$rD

  
  # now calculate D_overall using the three proposed methods
  D_collinear = 1/((1/D1) + (1/D2))
  D_best_feature = pmin(D1, D2)
  D_orth_contrast =  1/sqrt(1/(D1^2) + (1/D2^2))
  
  return(tibble(observer = observer, 
                .draw = 1:2000,
                feature1 = feature1, feature2 = feature2,
                D_collinear = D_collinear,
                D_best_feature = D_best_feature,
                D_orth_contrast = D_orth_contrast))

  
}


things_to_calc <- samples2 %>% select(-rD,  -D, -.draw) %>%
  distinct()


Dp <- pmap_df(things_to_calc, calc_D) %>% full_join(samples2)
