library(tidyverse)
library(tidybayes)
library(brms)

source("1_pre_process_data.R")

d1 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d1

d2 %>% mutate(observer = as.numeric(observer)) %>%
  select(-nd) -> d2

m <- readRDS("exp2_ring.model") 
n <- 2
 
samples <- gather_draws(m, `[rb(sigma)]_.*`, regex=T, ndraws = n)

 samples_ff <- filter(samples, str_detect(.variable, "b_")) %>% 
   select(-.chain, -.iteration)
 
  samples_rf <- filter(samples, str_detect(.variable, "r_")) %>% 
   select(-.chain, -.iteration) -> samples_rf
 
 samples_rf %>%
   filter(str_detect(.variable, ":lnd")) %>%
   rename(feature = ".variable", rD = ".value") %>%
   separate(feature, into = c("observer", "feature"), ",") %>%
   mutate(observer = parse_number(observer),
          feature = str_remove(feature, "feature"),
          feature = str_remove(feature, ":lnd"),
          feature = str_remove(feature, "]"))  -> slopes_rf

 samples_rf %>%
   filter(str_detect(.variable, "ndt")) %>%
   rename(observer = ".variable", ndt = ".value") %>%
   mutate(observer = parse_number(observer)) -> ndt_rf
 
 samples_rf %>%
   filter(str_detect(.variable, "ring")) %>%
   rename(ring = ".variable", intercept = ".value") %>%
   separate(ring, into  = c("observer", "ring"), ",") %>%
   mutate(observer = parse_number(observer),
          ring = parse_number(ring)) -> intercept_rf
 
 samples_ff  %>% 
   filter(str_detect(.variable, ":lnd")) %>%
   rename(feature = ".variable", D = ".value") %>%
   mutate(feature = str_remove(feature, "b_"),
          feature = str_remove(feature, "feature"),
          feature = str_remove(feature, ":lnd"))  %>% 
   separate(feature, into = c("ring", "feature"), sep = ":") %>% 
   mutate(ring = parse_number(ring)) -> slopes_ff
   
 samples_ff %>% 
   ungroup() %>%
   filter(str_detect(.variable, "ndt")) %>%
   select(-.variable) -> ndt_ff
 
 samples_ff %>%
   filter(str_detect(.variable, "b_ring")) %>%
   filter(!str_detect(.variable, ":")) %>%
   rename(ring = ".variable") %>%
   mutate(ring = parse_number(ring)) -> intercept_ff
 
 
 sigma <- VarCorr(m, summary=F)$residual %>% as_tibble()
 sigma$sd <- as.numeric(sigma$sd)
 sigma$.draw = 1:10000

 sigma %>% filter(.draw %in% samples$.draw) -> sigma
 
 
 #########################
 # join things together
 ##########################
 
# first combine fixed and random slopes
 
full_join(slopes_rf, slopes_ff, by = c(".draw", "feature")) %>%
   mutate(D = D + rD) %>%
   select(-rD) -> slopes 

# next up, intercepts!
full_join(intercept_rf, intercept_ff, by = c(".draw", "ring")) %>%
  mutate(a = intercept + .value) %>%
  select(-intercept, -.value) -> intercepts

# now, ndt
full_join(ndt_rf, ndt_ff, by = ".draw") %>%
  mutate(ndt = ndt + .value) %>%
  select(-.value)  -> ndt

intercepts %>% 
  full_join(slopes, by = c(".draw", "observer", "ring")) %>%
  full_join(ndt, by = c(".draw", "observer")) %>%
  full_join(sigma, by = ".draw") %>%
  mutate(ring = as_factor(ring)) %>%
  arrange(observer, ring, feature) -> models



# 
# 
# %>%
#   full_join(expand.grid(lnd = seq(0, 3.5, 0.1), .draw = unique(sigma$.draw)), 
#             by = ".draw") -> models
#  
# 
# models %>% 
#   mutate(linpred = a + D*lnd,
#          murt = exp(ndt) + exp(linpred)) -> pred
# 
# 
# pred %>% group_by(observer, ring, feature, lnd) %>%
#   summarise(murt = mean(murt)) %>%
#   ggplot(aes(lnd, murt, colour = as_factor(ring), 
#              group = interaction(observer, ring))) + 
#   geom_path() +
#   facet_wrap(~feature)



# calc loglik

draw  <- unique(models$.draw)[1]



mod <- filter(models, .draw == draw)

full_join(mod, d1, by = c("observer", "ring", "feature")) %>%
  select(.draw, observer, ring, feature, lnd, a, D, ndt, sd, rt) %>%
  mutate(p_mu_rt = exp(ndt) + exp(a + D*lnd)) %>%
  arrange(observer, ring, feature, lnd) -> dp


dp %>% group_by(observer, ring, feature, lnd) %>%
  summarise(p_mu_rt = unique(p_mu_rt),
            med_rt = median(rt)) %>%
  ggplot(aes(p_mu_rt, med_rt, group = observer)) + 
  geom_point(alpha=0.05) +
  geom_smooth(method = lm, se=FALSE) +
  facet_grid(feature~ring) +
  geom_abline(colour = "red")

dp %>% group_by(observer, ring, feature, lnd) %>%
  summarise(p_mu_rt = unique(p_mu_rt),
            med_rt = median(rt)) %>%
  ggplot(aes(lnd, med_rt, colour = ring)) + 
  geom_point(alpha = 0.5) +
  geom_path(aes(y = p_mu_rt)) + 
  facet_grid(observer~feature) -> plt

ggsave("tmp_model_comp.png", height = 50, width = 5, limitsize= FALSE)

