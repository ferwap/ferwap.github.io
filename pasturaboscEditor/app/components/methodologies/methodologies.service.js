(function() {
  'use strict';

  angular
      .module('pasturaboscEditor')
      .service('methodologies', methodologies);

  /** @ngInject */
  function methodologies($http, $q) {
    this.getNews = getNews;
	this.getNewsFileName = getNewsFileName;

    function getNews() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/news/methodologies.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
	function getNewsFileName() {
		return "methodologies.json";
	}
	
  }

})();
