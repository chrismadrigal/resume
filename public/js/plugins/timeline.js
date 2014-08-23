define(function (require) {
  var app = require('app');

  require('waypoints');

  // Wait for the views to be rendered.
  app.vent.on('view:dom:refresh', function (view) {
    var $timelineBlocks = view.$el.find('.timeline-block');

    // Animate elements when enter view port.
    $timelineBlocks.each(function(index, timelineBlock) {
      var $el = $(this);
        $(this).waypoint(function (dir) {
          if (dir === 'down') {
            $el.find('.timeline-title').removeClass('is-hidden').addClass('bounceInLeft animated')
            $el.find('.timeline-content').removeClass('is-hidden').addClass('bounceInRight animated')
          }
        }, {offset: "90%"});
    });
  });
});