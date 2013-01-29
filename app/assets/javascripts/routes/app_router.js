Kf.Router.map(function() {
  this.resource('documents');
  this.resource('document', { path: 'document/:document_id' });
});

Kf.IndexRoute = Ember.Route.extend({
  // redirect: function() {
  //   this.transitionTo('documents');
  // }
});

Kf.DocumentRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'document' });
  }
  // setupController: function(controller, context) {
  //   console.log(controller, context);
  // }
});