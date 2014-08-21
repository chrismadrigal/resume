define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  MainContent = Marionette.ItemView.extend({
    template: require('hbs!main'),
    className: 'site-main'
  });

  return MainContent;
});