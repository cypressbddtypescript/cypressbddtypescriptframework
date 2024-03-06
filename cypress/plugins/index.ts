//const cucumber = require('cypress-cucumber-preprocessor').default;
//const browserify = require('@cypress/browserify-preprocessor');
//const allureWriter = require('@shelex/cypress-allure-plugin/writer')

import allureWriter from '@shelex/cypress-allure-plugin/writer';

//const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

  //on('file:preprocessor', cucumber());
  allureWriter(on, config);

};