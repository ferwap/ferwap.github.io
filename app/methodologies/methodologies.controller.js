(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('MethodologiesController', MethodologiesController);

  /** @ngInject */
  function MethodologiesController(methodologies, $log) {
    var vm = this;
	vm.methodologiesThings = [];
	vm.activeMethodologyId = 0;

    activate();

    function activate() {
		getMethodologiesThings();
	}
	
	function getMethodologiesThings() {
		methodologies.getMethodologies().then(function(data) {
			vm.methodologiesThings = data;
			if(data) {
				vm.activeMethodologyId = vm.methodologiesThings[0].id;
			}
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
	vm.activateMethodology = function(methodologyId) {
		vm.activeMethodologyId = methodologyId;
	}
	
  }
})();
