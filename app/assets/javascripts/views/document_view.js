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
  // autosave: '/save.php',
  // interval: 30,
  // autosaveCallback: function(data, redactor_obj) { alert(data); },
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  // air: true,
  airButtons: headerFormattingButtons,
  allowedTags: ['p', 'b', 'h1', 'h2'],
  // plugins: ['extendedDropdown', 'externalswitcher'],
  plugins: ['externalswitcher'],
  extendedDropdown: [{
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
  }]
};

var mainOptions = {
  lang: 'sv',
  buttons: mainFormattingButtons,
  toolbarExternal: '.external-main-toolbar',
  formattingTags: ['h1', 'h2', 'p'],
  convertLinks: false,
  // autosave: '/save.php',
  // interval: 30,
  // autosaveCallback: function(data, redactor_obj) { alert(data); },
  // imageGetJson: '/images.json',
  // imageUpload: '/image_upload.php',
  // imageUploadCallback: function(obj, json) {  },
  // imageUploadErrorCallback: function(obj, json) {  },
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  // air: true,
  airButtons: mainFormattingButtons,
  allowedTags: ['p', 'b', 'h1', 'h2'],
  plugins: ['externalswitcher'],
};

var footerOptions = {
  lang: 'sv',
  buttons: footerFormattingButtons,
  toolbarExternal: '.external-footer-toolbar',
  formattingTags: ['h1', 'h2', 'p'],
  convertLinks: false,
  // autosave: '/save.php',
  // interval: 30,
  colors: ['#000000', '#FFFFFF', '#FF0000'],
  // air: true,
  airButtons: footerFormattingButtons,
  allowedTags: ['p', 'b', 'h1', 'h2'],
  plugins: ['externalswitcher'],
};

Kf.DocumentView = Ember.View.extend({
  templateName: "asyncDocument", // using the asynchronously defined template in the model
  didInsertElement: function() {
    // settings the content for the editors on the controller. Check if there's a better place to define these.
    var controller = this.get('controller');
    var model = controller.get('model');
    controller.setProperties(model.get('content'));

    this.setupEditors();
  },
  setupEditors: function() {
    $('.header-redactor').redactor(headerOptions);
    $('.main-redactor').redactor(mainOptions);
    $('.footer-redactor').redactor(footerOptions);
  }
});
