Kf.ApplicationController = Ember.Controller.extend({
  
});

Kf.AllContributorsController = Ember.ArrayController.extend();
Kf.AllContributorsView = Ember.View.extend({
  templateName: 'contributors'
});

Kf.Contributor = Ember.Object.extend({
  loadMoreDetails: function(){
    $.ajax({
      url: 'https://api.github.com/users/%@'.fmt(this.get('login')),
      context: this,
      dataType: 'jsonp',
      success: function(response){
        this.setProperties(response.data);
      }
    });
  },
  loadRepos: function(){
    $.ajax({
      url: 'https://api.github.com/users/%@/repos'.fmt(this.get('login')),
      context: this,
      dataType: 'jsonp',
      success: function(response){
        this.set('repos',response.data);
      }
    });
  }
});
Kf.Contributor.reopenClass({
  allContributors: [],
  find: function() {
    $.ajax({
      url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
      dataType: 'jsonp',
      context: this,
      success: function(response){
        response.data.forEach(function(contributor){
          this.allContributors.addObject(Kf.Contributor.create(contributor));
        }, this);
      }
    });
    return this.allContributors;
  },
  findOne: function(username){
    var contributor = Kf.Contributor.create({
      login: username
    });

    $.ajax({
      url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
      dataType: 'jsonp',
      context: contributor,
      success: function(response){
        this.setProperties(response.data.findProperty('login', username));
      }
    });

    return contributor;
  }
});

Kf.OneContributorView = Ember.View.extend({
  templateName: 'a-contributor'
});
Kf.OneContributorController = Ember.ObjectController.extend();

Kf.DetailsView = Ember.View.extend({
  templateName: 'contributor-details'
});

Kf.ReposView = Ember.View.extend({
  templateName: 'repos'
});