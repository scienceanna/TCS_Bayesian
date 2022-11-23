library(tidyverse)
library(readxl)
library(writexl)

list_master <- read_excel("image_stimuli_final_master.xlsx")

for (p in 1:100) {
  
  # filename to save to
  filename <- paste0("orders/list_sub_", p, ".xlsx")

  # take out the 1b trials
  list_1b <- list_master %>%
    filter(grepl('1b', ImageFile)) %>%
    mutate(targetType = 1)

  # get everything else
  list_everythingelse <- list_master %>%
    filter(!grepl('1b', ImageFile)) %>%
    mutate(targetType = 0)

  # Shuffle 1b
  list_1b_shuffled <- list_1b %>%
    slice_sample(n = 320, replace = FALSE)

  # Shuffle everything else
  list_everythingelse_shuffled <- list_everythingelse %>%
    slice_sample(n = 1280, replace = FALSE)

  # choose where 1b is going to go
  # position 1, 321, 641, 961, 1281

  positions <- sample(c(1, 321, 641, 961, 1281))
  position_choice <- positions[1]

  full_list <- list_everythingelse_shuffled %>% 
    add_row(list_1b_shuffled, .before = position_choice)
  
  # save
  full_list %>% write_xlsx(filename, format_headers = FALSE)

}
