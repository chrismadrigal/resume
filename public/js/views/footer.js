define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  var FooterView = Marionette.ItemView.extend({
    template: require('hbs!footer'),
    className: 'site-footer'
  });

  return FooterView;
});