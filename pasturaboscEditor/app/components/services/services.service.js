(function() {
  'use strict';

  angular
      .module('pasturaboscEditor')
      .service('services', services);

  /** @ngInject */
  function services($http, $q) {
    this.getNews = getNews;
	this.getNewsFileName = getNewsFileName;

    function getNews() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/news/services.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
	function getNewsFileName() {
		return "services.json";
	}	
	
  }

})();
