(function() {
  'use strict';

  angular
      .module('pasturaboscEditor')
      .service('news', news);

  /** @ngInject */
  function news($http, $q) {
    this.getNews = getNews;
	this.getNewsFileName = getNewsFileName;

    function getNews() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/news/news.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
	function getNewsFileName() {
		return "news.json";
	}	
	
  }

})();
