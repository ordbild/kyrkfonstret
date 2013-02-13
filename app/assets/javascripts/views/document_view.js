App.DocumentView = Ember.View.extend({
  classNameBindings: ['slug'],
  slug: function() {
    return this.templateName || '';
  }.property()
});