(function() {
  'use strict';

  angular
      .module('pasturaboscEditor')
      .service('recipes', recipes);

  /** @ngInject */
  function recipes($http, $q) {
    this.getNews = getNews;
	this.getNewsFileName = getNewsFileName;

    function getNews() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/news/recipes.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
	function getNewsFileName() {
		return "recipes.json";
	}	
	
  }

})();
