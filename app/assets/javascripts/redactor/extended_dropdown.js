if (typeof RedactorPlugins === 'undefined') var RedactorPlugins = {};

(function($){
  'use strict';
  RedactorPlugins.extendedDropdown = {
    init: function() {
      if(this.opts.extendedDropdown === undefined) {
        return;
      }

      this.setupButton();
    },
    setupButton: function() {
      var opts = this.opts.extendedDropdown;

      for (var key in opts) {
        var settings = opts[key];

        var btn = this.buildButton(settings.key, { title: settings.title, callback: settings.callback, items: settings.items });
        this.$toolbar.append($('<li>').append(btn));
      }
    },
    buildButton: function(key, obj) {
      var button = $('<a href="javascript:void(null);" title="' + obj.title + '" class="redactor_btn_' + key + '"></a>');

      var dropdown = $('<div class="redactor_dropdown" style="display: none;">');

      dropdown = this.buildDropdown(dropdown, obj);

      this.dropdowns.push(dropdown.appendTo($(document.body)));

      // observing dropdown
      this.hdlShowDropDown = $.proxy(function(e) { this.showDropDown(e, dropdown, key); }, this);

      button.click(this.hdlShowDropDown);

      return button;
    },
    buildDropdown: function(dropdown, obj) {
      $.each(obj.items, $.proxy(
        function (x, d)
        {
          if (typeof(d.className) === 'undefined')
          {
            d.className = '';
          }

          var dropA;
          if (typeof d.name !== 'undefined' && d.name === 'separator')
          {
            dropA = $('<a class="redactor_separator_drop">');
          }
          else
          {
            dropA = $('<a href="javascript:void(null);" class="' + d.className + '">' + d.title + '</a>');

            if (d.color) {
              dropA.css({ 'backgroundColor': d.color });
            }

            if (typeof(d.callback) === 'function')
            {
              $(dropA).click($.proxy(function(e) { d.callback(this, e, x, obj.items[x]); }, this));
            }
            else if (typeof(d.func) === 'undefined')
            {
              $(dropA).click($.proxy(function() { this.execCommand(d.exec, x); }, this));
            }
            else
            {
              $(dropA).click($.proxy(function(e) { this[d.func](e); }, this));
            }
          }

          $(dropdown).append(dropA);

        }, this)
      );

      return dropdown;
    }
  };
})(jQuery);