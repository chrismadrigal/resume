define(function (require) {
  var app = require('app')
    , Marionette = require('marionette')
    ;

  var HeaderView = Marionette.ItemView.extend({
    template: require('hbs!header'),
    className: 'site-header animated fadeIn'
  });

  return HeaderView;
});