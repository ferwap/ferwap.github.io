(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('NewsDetailController', NewsDetailController);

  /** @ngInject */
  function NewsDetailController(news, $stateParams, $log) {
	var vm = this;
	vm.detail = {title:'titulo', text:'description'};
	vm.newsId = $stateParams.newsId;
	
    activate();

    function activate() {
		loadNews();
	}	
	
	function loadNews() {
		news.getNewsBy($stateParams.newsId).then(function(data) {
			$log.debug(data);
			vm.detail = data;
		})
		.catch(function(err) {
			$log.error(err);
		});
	}	
	
  }
})();
