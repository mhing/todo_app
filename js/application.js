window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});

/*

Now we'll add fixture data. 
Fixtures are a way to put sample data into an application before 
connecting the application to long-term persistence.

Todos.ApplicationAdapter = DS.FixtureAdapter.extend(); 

*/

