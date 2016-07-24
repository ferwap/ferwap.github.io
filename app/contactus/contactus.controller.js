(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .controller('ContactUsController', ContactUsController);

  /** @ngInject */
  function ContactUsController($window) {
    var vm = this;
	vm.mailData = {};

    activate();
	
	function activate() {
		resetMailData();
	}
	
    function resetMailData() {
		vm.mailData = {
			"email": "",
			"sendTo": "aritxun@gmail.com",
			"subject":"Contacta con nosotros",
			"content":"",
			"phone":""
		};
    }	
	
	vm.send = function () {
		var bodyText = "Buenos dias, me gustaria contactar con fisio camallera.";
		if(vm.mailData.email != "") {
			bodyText+=" Mi email es "+vm.mailData.email+".";
		}
		if(vm.mailData.phone != "") {
			bodyText+=" Mi teléfono es "+vm.mailData.phone+".";
		}
		bodyText+="El motivo del contacto es el siguiente: "+vm.mailData.content;
		$window.open("mailto:"+ vm.mailData.sendTo + "?subject=" + vm.mailData.subject+"&body="+bodyText,"_self");
	}	
	
  }
})();
