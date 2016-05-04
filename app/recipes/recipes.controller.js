(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('RecipesController', RecipesController);

  /** @ngInject */
  function RecipesController(recipes, $log) {
    var vm = this;
	vm.recipesThings = [];

    activate();

    function activate() {
		getRecipesThings();
	}
	
	function getRecipesThings() {
		recipes.getRecipes().then(function(data) {
			$log.debug(data);
			vm.recipesThings = data;
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
  }
})();
