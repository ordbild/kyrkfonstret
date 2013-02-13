DS.RESTAdapter.configure("plurals", {
  assembly: "assemblies"
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});

