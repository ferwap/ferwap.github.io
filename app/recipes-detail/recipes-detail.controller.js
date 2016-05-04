(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('RecipesDetailController', RecipesDetailController);

  /** @ngInject */
  function RecipesDetailController(recipes, $stateParams, $log) {
	var vm = this;
	vm.detail = {title:'titulo', text:'description'};
	vm.recipesId = $stateParams.recipesId;
	
    activate();

    function activate() {
		loadRecipes();
	}	
	
	function loadRecipes() {
		recipes.getRecipesBy($stateParams.recipesId).then(function(data) {
			$log.debug(data);
			vm.detail = data;
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
  }
})();
