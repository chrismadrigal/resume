define(function (require) {
  var app = require('app')
  , Marionette = require('marionette')
  , HeaderView = require('views/header')
  , MainContentView = require('views/main');

  // App-level plugins.
  require('plugins/handlebars');

  // Add app-level regions.
  app.addRegions({
    header: 'header',
    main: 'main',
    footer: 'footer'
  });

  app.header.show(new HeaderView());
  app.main.show(new MainContentView);


  // Return modified app.
  return app;
});
