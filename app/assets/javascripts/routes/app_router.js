Kf.Router = Ember.Router.extend({
  enableLogging: true,
  root: Ember.Route.extend({
    contributors: Ember.Route.extend({
      route: '/',
      
      showContributor: Ember.Route.transitionTo('aContributor'),

      connectOutlets: function(router){
        router.get('applicationController').connectOutlet('allContributors', Kf.Contributor.find());
      }
    }),

    aContributor: Ember.Route.extend({
      route: '/:githubUserName',
      showDetails: Ember.Route.transitionTo('details'),
      showRepos: Ember.Route.transitionTo('repos'),
      showAllContributors: Ember.Route.transitionTo('contributors'),
      
      connectOutlets: function(router, context){
        router.get('applicationController').connectOutlet('oneContributor', context);
      },
      serialize: function(router, context){
        return {
          githubUserName: context.get('login')
        };
      },
      deserialize: function(router, urlParams){
        return Kf.Contributor.findOne(urlParams.githubUserName);
      },

      // child states
      initialState: 'details',

      details: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router){
          router.get('oneContributorController.content').loadMoreDetails();
          router.get('oneContributorController').connectOutlet('details');
        }
      }),
      repos: Ember.Route.extend({
        route: '/repos',
        connectOutlets: function(router){
          router.get('oneContributorController.content').loadRepos();
          router.get('oneContributorController').connectOutlet('repos');
        }
      })
    })

  })
});