var COLORS = {
  white: "#ffffff",
  blue: "#0093d6",
  grey: "#f4f4f4",
  yellow: "#fce000",
  lightGreen: "#c0cf02",
  lightPurple: "#e64591",
  lightViolet: "#f3e5f0",
  darkGreen: "#63aa2e",
  purple: "#cc037b",
  red: "#e00713",
  violet: "#744191"
};

var ALLOWED_COLORS = [
  'white',
  'grey',
  'blue',
  'yellow',
  'lightGreen',
  'darkGreen',
  'lightViolet',
  'violet',
  'lightPurple',
  'purple',
  'red',
];

var SYMBOLS = {
  basePath: "/assets/symbols/",
  white: "Kyrkofonstret_Skugga_gra.png",
  blue: "Kyrkofonstret_Skugga_bla.png",
  grey: "Kyrkofonstret_Skugga_gra.png",
  yellow: "Kyrkofonstret_Skugga_gul.png",
  lightGreen: "Kyrkofonstret_Skugga_ljusgron.png",
  lightPurple: "Kyrkofonstret_Skugga_ljuspurpur.png",
  lightViolet: "Kyrkofonstret_Skugga_ljusviolett.png",
  darkGreen: "Kyrkofonstret_Skugga_morkgron.png",
  purple: "Kyrkofonstret_Skugga_purpur.png",
  red: "Kyrkofonstret_Skugga_rod.png",
  violet: "Kyrkofonstret_Skugga_violett.png"
};

App.Colors = Ember.ArrayController.create();
App.Colors.set('content', ALLOWED_COLORS);

App.assemblyController = Ember.ArrayController.create();
App.assemblyController.set('content', App.Assembly.find());

App.ImgView = Ember.View.extend({
  tagName: "img",
  rootView: Ember.computed(function() {
    return this.nearestWithProperty('isRootView');
  }).property().cacheable(),
  modelBinding: "rootView.model",
  attrBinding: "rootView.setAttr",
  colorUpdated: function(e, attr) {
    this.setSymbol(attr);
  },//.observes('model.secondaryColor'),
  didInsertElement: function() {
    this.setSymbol(this.attr);
    Ember.addObserver(this, this.attr, this, this.colorUpdated);
  },
  setSymbol: function(attr) {
    var color = this.get(attr), fileName;

    fileName = SYMBOLS['basePath']+SYMBOLS[color];

    this.$().attr( 'src', fileName );
  }
});

App.ColorPickerItemView = Ember.View.extend({
  tagName: "li",
  classNames: "color-picker__color",
  modelBinding: 'App.Document',
  rootView: Ember.computed(function() {
    return this.nearestWithProperty('isRootView');
  }).property().cacheable(),
  modelBinding: "rootView.model",
  attrBinding: "rootView.setAttr",
  didInsertElement: function() {
    this.$().css({background: COLORS[this.get('content')]});
  },
  click: function(e) {
    var attr = this.get('attr');
    this.set(attr, this.get('content'));
  }
});

App.ColorPickerView = Ember.CollectionView.extend({
  tagName: "ul",
  classNames: ["color-picker"],
  contentBinding: "App.Colors",
  itemViewClass: App.ColorPickerItemView,
  isVisibleBinding: 'parentView.isChildVisible',
  x: function(value) {
    console.log(value);
  }.property(),
  didInsertElement: function() {
  // this.set('content', $.map(allowedColors.split(","), $.trim) );

  //   return;
  //   var receiver = this.get('receiver');
  //   var _this = this;

  //   receiver.on('mouseEnter', function(e) {
  //     _this.$().show();
  //   });

  //   receiver.on('mouseLeave', function(e) {
  //     _this.$().hide();
  //   });
  }
});

App.DocumentHeaderView = Ember.ContainerView.extend({
  classNames: ['document-header'],
  childViews: ['pickerView'],
  pickerView: App.ColorPickerView,
  isRootView: true,
  isChildVisible: false,
  colorUpdated: function(e, attr) {
    this.setBackground(this.setAttr);
  },//.observes('model.primaryColor'),
  didInsertElement: function() {
    this.setBackground(this.setAttr);
    Ember.addObserver(this, this.setAttr, this, this.colorUpdated);
  },
  setBackground: function(attr) {
    var color = this.get(attr);

    this.$().css('background', COLORS[color]);
  },
  click: function(e) {
    // console.log('click', e);

    this.toggleProperty('isChildVisible');
    this.pickerView.$().css({'top': e.offsetY, 'left': e.offsetX});
  }
});

App.SymbolView = Ember.ContainerView.extend({
  classNames: ['symbol'],
  childViews: ['imgView', 'pickerView'],
  imgView: App.ImgView,
  pickerView: App.ColorPickerView,
  isRootView: true,
  isChildVisible: false,
  didInsertElement: function() {
    // this.setSymbol();
    // this.set('allowedColors', $.map(this.get('allowedColors').split(","), $.trim) );
    // console.log('pickerItem', this.get('model').get('title'));
  },
  click: function(e) {
    console.log('click', e);

    this.toggleProperty('isChildVisible');
    this.pickerView.$().css({'top': e.offsetY, 'left': e.offsetX});
  }
});

App.AssemblySelect = Ember.Select.extend({
  isVisible: false,
  didInsertElement: function() {
    var _this = this;
    Ember.Instrumentation.subscribe("assembly.click", {
      before: function(name, timestamp, payload) {
        // console.log('Recieved ', name, ' at ' + timestamp + ' with payload: ', payload);
        _this.set('isVisible', true);
      },
      after: function() {}
    });
  },
  change: function(e) {
    console.log('select');
    Ember.Instrumentation.instrument("assembly.select", e);
    this.set('isVisible', false);
  }
});

App.AssemblyTitle = Ember.View.extend({
  didInsertElement: function() {
    var _this = this;
    Ember.Instrumentation.subscribe("assembly.select", {
      before: function(name, timestamp, payload) {
        // console.log('Recieved ', name, ' at ' + timestamp + ' with payload: ', payload);
        _this.set('isVisible', true);
      },
      after: function() {}
    });
  },
  click: function(e) {
    Ember.Instrumentation.instrument("assembly.click", e);
    this.set('isVisible', false);
  }
});