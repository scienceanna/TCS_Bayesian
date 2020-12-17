functions {
}
data {
  int<lower=1> N;  // total number of observations
  vector[N] Y;  // response variable
  int<lower=1> K;  // number of population-level effects
  matrix[N, K] X;  // population-level design matrix
  // data for group-level effects of ID 1
  int<lower=1> N_1;  // number of grouping levels
  int<lower=1> M_1;  // number of coefficients per level
  int<lower=1> J_1[N];  // grouping indicator per observation
  // group-level predictor values
  vector[N] Z_1_1;
  // data for group-level effects of ID 2
  int<lower=1> N_2;  // number of grouping levels
  int<lower=1> M_2;  // number of coefficients per level
  int<lower=1> J_2[N];  // grouping indicator per observation
  // group-level predictor values
  vector[N] Z_2_ndt_1;
  int prior_only;  // should the likelihood be ignored?
}
transformed data {
  real min_Y = min(Y);
}
parameters {
  vector[K] b;  // population-level effects
  real<lower=0> sigma;  // residual SD
  real Intercept_ndt;  // temporary intercept for centered predictors
  vector<lower=0>[M_1] sd_1;  // group-level standard deviations
  vector[N_1] z_1[M_1];  // standardized group-level effects
  vector<lower=0>[M_2] sd_2;  // group-level standard deviations
  vector[N_2] z_2[M_2];  // standardized group-level effects
}
transformed parameters {
  vector[N_1] r_1_1;  // actual group-level effects
  vector[N_2] r_2_ndt_1;  // actual group-level effects
  r_1_1 = (sd_1[1] * (z_1[1]));
  r_2_ndt_1 = (sd_2[1] * (z_2[1]));
}
model {
  // likelihood including all constants
  if (!prior_only) {
    // initialize linear predictor term
    vector[N] mu = X * b;
    // initialize linear predictor term
    vector[N] ndt = Intercept_ndt + rep_vector(0.0, N);
    for (n in 1:N) {
      // add more terms to the linear predictor
      mu[n] += r_1_1[J_1[n]] * Z_1_1[n];
    }
    for (n in 1:N) {
      // add more terms to the linear predictor
      ndt[n] += r_2_ndt_1[J_2[n]] * Z_2_ndt_1[n];
    }
    for (n in 1:N) {
      // apply the inverse link function
      ndt[n] = exp(ndt[n]);
    }
    target += lognormal_lpdf(Y - ndt | mu, sigma);
  }
  // priors including all constants
  target += normal_lpdf(b[1] | -1.4, 0.2);
  target += normal_lpdf(b[2] | -1.4, 0.2);
  target += normal_lpdf(b[3] | -1.4, 0.2);
  target += normal_lpdf(b[4] | -1.4, 0.2);
  target += normal_lpdf(b[5] | -1.4, 0.2);
  target += normal_lpdf(b[6] | -1.4, 0.2);
  target += normal_lpdf(b[7] | 0, 0.2);
  target += normal_lpdf(b[8] | 0, 0.2);
  target += normal_lpdf(b[9] | 0, 0.2);
  target += normal_lpdf(b[10] | 0, 0.2);
  target += normal_lpdf(b[11] | 0, 0.2);
  target += normal_lpdf(b[12] | 0, 0.2);
  target += cauchy_lpdf(sigma | 0, 0.4)
    - 1 * cauchy_lccdf(0 | 0, 0.4);
  target += normal_lpdf(Intercept_ndt | -1, 0.5);
  target += cauchy_lpdf(sd_1 | 0, 0.1)
    - 1 * cauchy_lccdf(0 | 0, 0.1);
  target += std_normal_lpdf(z_1[1]);
  target += student_t_lpdf(sd_2 | 3, 0, 2.5)
    - 1 * student_t_lccdf(0 | 3, 0, 2.5);
  target += std_normal_lpdf(z_2[1]);
}
generated quantities {
  // actual population-level intercept
  real b_ndt_Intercept = Intercept_ndt;
}