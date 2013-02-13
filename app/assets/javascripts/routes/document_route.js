// App.DocumentsRoute = Ember.Route.extend({
//   model: function() {
//     return App.Document.find();
//   }
// });

App.DocumentsIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Document.find({public: false});
  }
});

App.DocumentsSelectRoute = Ember.Route.extend({
  model: function() {
    return App.Document.find({public: true});
  }
});

App.DocumentsShowRoute = Ember.Route.extend({
  exit: function() {
    console.log('exit');
    var store = this.get('store');
    var transaction = store.transaction();
    // transaction.rollback();
    this.store.get('defaultTransaction').rollback();
  },
  events: {
    save: function() {
      var model = this.get('currentModel');

      console.log("save doc route");

      // if ( model.get('public') ) {
      if ( !model.get('public') ) {
        var store = this.get('store');
        var transaction = store.transaction();
        var doc = transaction.createRecord(App.Document, model.serialize());

        transaction.add(doc); // add the Document transaction

        // setup a transition when the record is created...
        var _this = this;
        doc.one('didCreate', function() {
          console.log('created', doc);

          Ember.run.next(this, function() {
            _this.transitionTo('documents.show', doc);
          });
        });

        // then commit
        transaction.commit();
      } else {
        this.store.commit();
      }
    },
    print: function() {
      var model = this.get('currentModel'),
          url = model.get('printUrl'),
          docContent = $('.document-container').html();

      var data = escapeHtml(docContent);


      $.download('/documents/print.pdf', data);
    }
  }
});

var entityMap = {
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': '&quot;',
   "'": '&#39;',
   "/": '&#x2F;'
 };

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

jQuery.download = function(url, data, method){
  //url and data options required
  if( url && data ){ 
    //data can be string of parameters or array/object
    // data = typeof data == 'string' ? data : jQuery.param(data);
    //split params into form inputs
    var inputs = '';
    // jQuery.each(data.split('&'), function(){ 
      // var pair = this.split('=');
      // inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
      inputs+='<input type="hidden" name="document" value="'+ data +'" />'; 
    // });
    //send request
    jQuery('<form target="_blank" action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
    .appendTo('body').submit().remove();
  };
};