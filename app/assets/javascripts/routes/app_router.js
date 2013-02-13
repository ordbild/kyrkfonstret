App.Router.map(function() {
  this.resource('documents', function() {
    this.route('show', { path: '/:document_id' });
    this.route('select');
  });
});

App.ApplicationRoute = Ember.Route.extend({

});

App.IndexRoute = Ember.Route.extend({
  // redirect: function() {
  //   this.transitionTo('guides');
  // }
});