(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('NewsController', NewsController);

  /** @ngInject */
  function NewsController(news, $log) {
    var vm = this;
	vm.newsThings = [];

    activate();

    function activate() {
		getNewsThings();
	}
	
	function getNewsThings() {
		news.getNews().then(function(data) {
			$log.debug(data);
			vm.newsThings = data;
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
  }
})();
