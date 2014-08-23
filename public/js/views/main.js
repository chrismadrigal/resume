define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  var MainContent = Marionette.ItemView.extend({
    template: require('hbs!main'),
    className: 'site-main'
  });

  return MainContent;
});