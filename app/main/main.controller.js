(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {

    var vm = this;
	vm.myInterval = 5000;
	vm.noWrapSlides = false;
	var slides = vm.slides = [];
	var currIndex = 0;
  
    activate();

    function activate() {
		for (var i = 0; i < 5; i++) {
			addSlide();
		}
	}

	function addSlide() {
		//var newWidth = 600 + slides.length + 1;
		slides.push({
			//image: 'http://lorempixel.com/' + newWidth + '/300',
			image: ['assets/images/news/13043369_977517772333561_2687707818660651716_n.jpg',
			'assets/images/news/13051525_10207566479375115_7598000722714230382_n.jpg',
			'assets/images/news/DSC_3733.JPG',
			'assets/images/news/ipad_020.jpg',
			'assets/images/news/P1020341_[800x600].jpg'
			][slides.length % 5],
			text: ['Nice image','Awesome photograph','cabra1','cabra2','cabra3'][slides.length % 5],
			id: currIndex++
		});
    }
	
  }
})();
