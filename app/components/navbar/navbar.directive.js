(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          relativeDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $log, ngTranslation, $scope, news, recipes) {

        // "vm.creation" is avaible by directive option "bindToController: true"
        //vm.relativeDate = moment(vm.creationDate).fromNow();
        
		//$scope.language = ngTranslation.getLang
		// obtain language list from servide
		
		$scope.newsCount = 0;
		
		activate();
		
		function activate() {
			getNewsThings();
			getRecipesThings();
		}
		
        $scope.changeLanguage = function (lang) {
            $log.debug('NavbarController.changeLanguage to '+lang);
			$scope.language = lang;
            ngTranslation.use(lang);
        };
		
		function getNewsThings() {
			news.getNews().then(function(data) {
				$log.debug(data);
				$scope.newsCount = data.length;
			})
			.catch(function(err) {
				$log.error(err);
			});
		}

		function getRecipesThings() {
			recipes.getRecipes().then(function(data) {
				$scope.recipesCount = data.length;
			})
			.catch(function(err) {
				$log.error(err);
			});
		}		
		
    }
  }

})();
