App.RedactorView = Ember.View.extend({
  tagName: 'div',
  init: function() {
    this._super();
    
    this.on("focusOut", this, this._elementValueDidChange);
    this.on("change", this, this._elementValueDidChange);
    this.on("paste", this, this._elementValueDidChange);
    this.on("cut", this, this._elementValueDidChange);
    this.on("input", this, this._elementValueDidChange);
  },
  _updateElementValue: Ember.observer(function() {
    var value = Ember.get(this, 'value'),
        // $el = this.$();
        $el = this.$().context;

    if ($el && value !== $el.innerHTML) {
      $el.innerHTML = value;
    }
  }, 'value'),
  _elementValueDidChange: function() {
    $el = this.$().context;
    Ember.set(this, 'value', $el.innerHTML);
  },
  didInsertElement: function() {
    var options = this.get('options') ? eval(this.get('options')) : {};
    this.$().redactor(options);
    this._updateElementValue();
  },
  willInsertElement: function() {
  },
  willDestroyElement: function() {
    this.$().destroyEditor();
  }
});

var  extendedDropdown = [{
    key: 'header_color',
    title: 'Header Color',
    items: {
      red: {
        title: 'Red',
        className: 'redactor_color_link',
        color: '#FF0000',
        callback: colorCallback,
        target: {
          selector: '.header',
          attribute: 'backgroundColor'
        }
      },
      green: {
        title: 'Green',
        className: 'redactor_color_link',
        color: '#00FF00',
        callback: colorCallback,
        target: {
          selector: '.header',
          attribute: 'backgroundColor'
        }
      },
      blue: {
        title: 'Blue',
        className: 'redactor_color_link',
        color: '#0000FF',
        callback: colorCallback,
        target: {
          selector: '.header',
          attribute: 'backgroundColor'
        }
      }
    // {
    //   name: 'separator'
    // }
    }
  }];

var headerFormattingButtons = ['formatting', '|', 'bold', '|', 'fontcolor', '|', 'alignleft', 'alignright'];
var mainFormattingButtons = ['formatting', '|', 'bold', '|', 'image', 'table', '|', 'alignleft', 'alignright'];
var footerFormattingButtons = ['formatting', '|', 'bold', '|', 'table', '|', 'alignleft', 'alignright'];

var colorCallback = function (obj, event, key, keyObj) {
  var attr = keyObj.target.attribute;
  var value = keyObj.color;

  $(keyObj.target.selector).css(attr, value);
};

var headerOptions = {
  lang: 'sv',
  buttons: headerFormattingButtons,
  toolbarExternal: '.external-header-toolbar',
  formattingTags: ['h1', 'h2', 'p'],
  convertLinks: false,
  focus: true,
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  allowedTags: ['p', 'b', 'h1', 'h2'],
  plugins: ['externalswitcher']
}

var mainOptions = {
  lang: 'sv',
  buttons: mainFormattingButtons,
  toolbarExternal: '.external-main-toolbar',
  formattingTags: ['h1', 'h2', 'p'],
  convertLinks: false,
  // imageGetJson: '/images.json',
  // imageUpload: '/image_upload.php',
  // imageUploadCallback: function(obj, json) {  },
  // imageUploadErrorCallback: function(obj, json) {  },
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  airButtons: mainFormattingButtons,
  allowedTags: ['p', 'b', 'h1', 'h2'],
  plugins: ['externalswitcher']
};

var footerOptions = {
  lang: 'sv',
  buttons: footerFormattingButtons,
  toolbarExternal: '.external-footer-toolbar',
  formattingTags: ['h1', 'h2', 'p'],
  convertLinks: false,
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  airButtons: footerFormattingButtons,
  allowedTags: ['p', 'b', 'h1', 'h2'],
  plugins: ['externalswitcher']
};

