(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('ServicesController', ServicesController);

  /** @ngInject */
  function ServicesController(services, $log) {
    var vm = this;
	vm.servicesThings = [];
	vm.activeServiceId = 0;

    activate();

    function activate() {
		getServicesThings();
	}
	
	function getServicesThings() {
		services.getServices().then(function(data) {
			vm.servicesThings = data;
			if(data) {
				vm.activeServiceId = vm.servicesThings[0].id;
			}
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
	vm.activateService = function(serviceId) {
		vm.activeServiceId = serviceId;
	}	
	
  }
})();
