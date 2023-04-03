get_rt_model_simple <- function(m) {
  
  samples <- gather_draws(m, `[b(sigma)]_.*`, regex=T, ndraws = ndraws)
  
  samples_ff <- filter(samples, str_detect(.variable, "b_")) %>% 
    select(-.chain, -.iteration)
  
  samples_ff  %>% 
    filter(str_detect(.variable, ":lnd")) %>%
    rename(feature = ".variable", D = ".value") %>%
    mutate(feature = str_remove(feature, "b_"),
           feature = str_remove(feature, "feature"),
           feature = str_remove(feature, ":lnd")) -> slopes
  
  samples_ff %>% 
    ungroup() %>%
    filter(str_detect(.variable, "ndt")) %>%
    select(.draw, ndt = ".value") -> ndt
  
  samples_ff %>%
    filter(str_detect(.variable, "b_Intercept")) %>%
    ungroup() %>%
    select(.draw, a = ".value") -> intercepts
  
  sigma <- VarCorr(m, summary=F)$residual %>% as_tibble()
  sigma$sd <- as.numeric(sigma$sd)
  sigma$.draw = 1:10000
  
  sigma %>% filter(.draw %in% samples$.draw) -> sigma
  
  
  #########################
  # join things together
  ##########################
  
  intercepts %>% 
    full_join(slopes, by = c(".draw")) %>%
    full_join(ndt, by = c(".draw")) %>%
    full_join(sigma, by = ".draw") %>%
    arrange( feature) -> models
  
  # standardise draw indexing
  models %>% group_by(feature) %>%
    mutate(.draw = 1:length(unique(.draw))) %>%
    ungroup() -> models
  
  return(models)
}

get_rt_model_ring <- function(m) {
  
  samples <- gather_draws(m, `[b(sigma)]_.*`, regex=T, ndraws = ndraws)
  
  samples_ff <- filter(samples, str_detect(.variable, "b_")) %>% 
    select(-.chain, -.iteration)
  
  samples_ff  %>% 
    filter(str_detect(.variable, ":lnd")) %>%
    rename(feature = ".variable", D = ".value") %>%
    mutate(feature = str_remove(feature, "b_"),
           feature = str_remove(feature, "feature"),
           feature = str_remove(feature, ":lnd"))  %>% 
    separate(feature, into = c("ring", "feature"), sep = ":") %>% 
    mutate(ring = parse_number(ring)) -> slopes
  
  samples_ff %>% 
    ungroup() %>%
    filter(str_detect(.variable, "ndt")) %>%
    rename(ndt = ".value") %>%
    select(-.variable) -> ndt
  
  samples_ff %>%
    filter(str_detect(.variable, "b_ring")) %>%
    filter(!str_detect(.variable, ":")) %>%
    rename(ring = ".variable", a = ".value") %>%
    mutate(ring = parse_number(ring)) -> intercepts
  
  
  sigma <- VarCorr(m, summary=F)$residual %>% as_tibble()
  sigma$sd <- as.numeric(sigma$sd)
  sigma$.draw = 1:10000
  
  sigma %>% filter(.draw %in% samples$.draw) -> sigma
  
  
  #########################
  # join things together
  ##########################
  
  intercepts %>% 
    full_join(slopes, by = c(".draw", "ring")) %>%
    full_join(ndt, by = c(".draw")) %>%
    full_join(sigma, by = ".draw") %>%
    arrange( feature) -> models
  
  # standardise draw indexing
  models %>% group_by(feature, ring) %>%
    mutate(.draw = 1:length(unique(.draw))) %>%
    ungroup() -> models
  
  return(models)
}

get_rt_model_ring_obs <- function(m) {
  
  samples <- gather_draws(m, `[rb(sigma)]_.*`, regex=T, ndraws = ndraws)
  
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
  
  # standardise draw indexing
  models %>% group_by(observer, ring, feature) %>%
    mutate(.draw = 1:length(unique(.draw))) %>%
    ungroup() -> models
  
  return(models)
}
