(function() {
  'use strict';

  angular
    .module('fisioCamalleraEditor')
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
    function NavbarController(moment, $log, ngTranslation, $scope) {

        // "vm.creation" is avaible by directive option "bindToController: true"
        //vm.relativeDate = moment(vm.creationDate).fromNow();
        
		//$scope.language = ngTranslation.getLang
		// obtain language list from servide
		
        $scope.changeLanguage = function (lang) {
            $log.debug('NavbarController.changeLanguage to '+lang);
			$scope.language = lang;
            ngTranslation.use(lang);
        };    
    }
  }

})();
