App.Document = DS.Model.extend({
  slug: DS.attr('string'),
  title: DS.attr('string'),
  imageUrl: DS.attr('string'),
  public: DS.attr('boolean'),

  footer: DS.attr('string'),
  header: DS.attr('string'),
  main: DS.attr('string'),
  primaryColor: DS.attr('string'),
  secondaryColor: DS.attr('string'),
  
  printUrl: function() {
    return "/documents/" + this.get('id') + ".pdf"
  }.property(),
  colorChanged: function(e, attr) {
    var value = this.get(attr);
    var oppValue = (attr === 'primaryColor') ? this.get('secondaryColor') : this.get('primaryColor');
    var oppAttr = (attr === 'primaryColor') ? 'secondaryColor' : 'primaryColor';

    if( value !== 'white' ) {
      this.set(oppAttr, 'white');
    }

  }.observes('primaryColor', 'secondaryColor'),

  // user: DS.attr('App.User'),
  assembly: DS.belongsTo('App.Assembly')
});