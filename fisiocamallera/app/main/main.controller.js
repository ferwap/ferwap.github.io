(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(menuEntries) {
    var vm = this;
	vm.myInterval = 5000;
	vm.noWrapSlides = false;
	var slides = vm.slides = [];
	var currIndex = 0;
    vm.awesomeThings = [];


    activate();

    function activate() {
		getAwesomeThings();
		for (var i = 0; i < 5; i++) {
			addSlide();
		}
	}

    function addSlide() {
		//var newWidth = 600 + slides.length + 1;
		slides.push({
			//image: 'http://lorempixel.com/' + newWidth + '/300',
			image: ['assets/images/IMG_4691.jpg','assets/images/IMG_4699.jpg','assets/images/IMG_4727.jpg','assets/images/IMG_4788.jpg','assets/images/P1020671.JPG'][slides.length % 5],
			text: ['Nice image','Awesome photograph','That is so cool','I love that','foto 5'][slides.length % 5],
			id: currIndex++
		});
    }	

    function getAwesomeThings() {
      vm.awesomeThings = menuEntries.getMenuEntries();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
	
  }
})();
