import { FormioAppConfig } from 'angular-formio';   // this file tells the app where to point to in our form.io
import { FormioAuthConfig } from 'angular-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'https://bbcvyvdrznqnxhq.form.io',
  apiUrl: 'https://api.form.io',
  icons: 'fontawesome'
};

export const AuthConfig: FormioAuthConfig = {   // tells the auth model where are the forms
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};