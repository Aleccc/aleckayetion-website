export const environment = {
  production: true,
  headers: {
    Authorization: process.env.NG_APP_TOKEN
  },
  recaptcha_site_key: process.env.NG_APP_RECAPTCHA_SITE_KEY,
  aleckayetion_api_url: process.env.NG_APP_API_URL,
};
