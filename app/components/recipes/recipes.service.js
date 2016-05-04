(function() {
  'use strict';

  angular
      .module('pasturabosc')
      .service('recipes', recipes);

  /** @ngInject */
  function recipes($http, $q) {

    this.getRecipes = getRecipes;
	this.getRecipesBy = getRecipesBy;

    function getRecipes() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/recipes.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
    function getRecipesBy(recipesId) {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/recipes.json').success(function(data) {	
			for(var i = 0; i<data.length;i++) {
				if (data[i].id == recipesId) {
					defered.resolve(data[i]);
					break;
				}
			}
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }	
	
  }

})();
