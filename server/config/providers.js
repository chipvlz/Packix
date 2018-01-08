'use strict';

module.exports = (app) => {

  var config = {};
  const baseURL = process.env['HOST_URL'];

  if (process.env['USE_GOOGLE_LOGIN'] === 'YES') {
    config['google-login'] = {
      'provider': 'google',
      'module': 'passport-google-oauth',
      'strategy': 'OAuth2Strategy',
      'clientID': process.env['GOOGLE_LOGIN_CLIENT_ID'],
      'clientSecret': process.env['GOOGLE_LOGIN_CLIENT_SECRET'],
      'callbackURL': 'https://' + baseURL + '/api/auth/google/callback',
      'authPath': '/api/auth/google',
      'callbackPath': '/api/auth/google/callback',
      'successRedirect': '/api/auth/success',
      'scope': ['email', 'profile']
    };
  }

  if (process.env['USE_FACEBOOK_LOGIN'] === 'YES') {
    config['google-login'] = {
      'provider': 'facebook',
      'module': 'passport-facebook',
      'clientID': process.env['FACEBOOK_LOGIN_CLIENT_ID'],
      'clientSecret': process.env['FACEBOOK_LOGIN_CLIENT_SECRET'],
      'callbackURL': 'https://' + baseURL + '/api/auth/facebook/callback',
      'authPath': '/api/auth/facebook',
      'callbackPath': '/api/auth/facebook/callback',
      'successRedirect': '/api/auth/success',
      'scope': ['email', 'public_profile'],
      'profileFields': ['id', 'email', 'last_name', 'first_name', 'photos']
    };
  }

  return config;
};
