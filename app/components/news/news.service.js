(function() {
  'use strict';

  angular
      .module('pasturabosc')
      .service('news', news);

  /** @ngInject */
  function news($http, $q) {

    this.getNews = getNews;
	this.getNewsBy = getNewsBy;

    function getNews() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/news.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
    function getNewsBy(newsId) {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/news.json').success(function(data) {	
			for(var i = 0; i<data.length;i++) {
				if (data[i].id == newsId) {
					defered.resolve(data[i]);
					break;
				}
			}
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }	
	
  }

})();
