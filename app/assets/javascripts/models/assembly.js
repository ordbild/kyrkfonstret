App.Assembly = DS.Model.extend({
  title: DS.attr('string'),
  documents: DS.hasMany('App.Document')
});