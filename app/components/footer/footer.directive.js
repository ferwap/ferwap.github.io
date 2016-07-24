(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .directive('acmeFooter', acmeFooter);

  /** @ngInject */
  function acmeFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          relativeDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController($scope, BootSwatchService) {
		$scope.themes = [];
		
		activate();
		
		function activate() {
			getThemes();
		}
		
		function getThemes() {
			/*Get the list of availabel bootswatch themes*/
			BootSwatchService.get().then(function(themes) {
				$scope.themes = themes;
				$scope.themes.unshift({name:'Default',css:''});
			});
		}  
    }
  }

})();
