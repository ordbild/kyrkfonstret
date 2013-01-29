// Custom definition of attribute `object`
DS.JSONTransforms.object = {
  deserialize: function(serialized) {
    return Ember.isNone(serialized) ? {} : serialized;
  },
  serialize: function(deserialized) {
    return Ember.isNone(deserialized) ? {} : deserialized;
  }
}

Kf.Document = DS.Model.extend({
  title: DS.attr('string'),
  // user: DS.attr('references'),
  // template: DS.attr('references'),
  content: DS.attr('object'),
  structure: DS.attr('string'),
  coverImageUrl: DS.attr('string'),
  public: DS.attr('boolean'),
  didLoad: function() {
    // Defining a custom template to handle the asynchronously recieved data, later defined in the View
    Ember.TEMPLATES['asyncDocument'] = Ember.Handlebars.compile(this.get('structure'));
  }
});