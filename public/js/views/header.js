define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  HeaderView = Marionette.ItemView.extend({
    template: require('hbs!header'),
    className: 'site-header animated fadeInDown'
  });

  return HeaderView;
});