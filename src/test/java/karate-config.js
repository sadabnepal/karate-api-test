function fn() {
  let env = karate.env;
  if (!env) env = 'dev';
  let config = {
    env: env,
    BaseUrl: ''
  }
  if (env == 'dev') {
    config.BaseUrl = 'https://jsonplaceholder.typicode.com';
  } else if (env == 'e2e') {
    // customize
  }
  return config;
}