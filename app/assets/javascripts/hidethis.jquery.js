if (typeof HideThis === 'undefined') var HideThis = {};

(function($){
  'use strict';
  
  return;

  HideThis = {
    init: function(options) {

      $(options.form).bind('submit', function (e) {
        // e.preventDefault();
        console.log("asdfasdf");
        
        for(var key in options.selectors) {
          var settings = options.selectors[key];
          var sel = settings.selector;
          var attr = settings.attribute;
          var value = $(sel).css(attr);

          var input = $('<input>', {
            id: key,
            name: settings.name,
            type: 'hidden',
            value: value
          });

          console.log(value, input);

          input.appendTo('#document-form');
        }
      });
    }
  };

  // HideThis.init();

})(jQuery);