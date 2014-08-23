define(function (require) {
  var app = require('app')
  , Marionette = require('marionette')
  , HeaderView = require('views/header')
  , MainContentView = require('views/main')
  , FooterView = require('views/footer');

  // App-level plugins.
  require('plugins/views');
  require('plugins/handlebars');
  require('plugins/timeline');

  // Add app-level regions.
  app.addRegions({
    header: 'header',
    main: 'main',
    footer: 'footer'
  });

  app.header.show(new HeaderView());
  app.main.show(new MainContentView);
  app.footer.show(new FooterView);

  // Return modified app.
  return app;
});
