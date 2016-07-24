(function() {
  'use strict';

  angular
      .module('fisioCamalleraEditor')
      .service('news', news);

  /** @ngInject */
  function news($http, $q) {
    /*var newsData = [
      {
        'title': 'Des del Fisiocam et desitjo',
        'image': 'news/nadal2015.jpg',
		'description': 'Des del Fisiocam et desitjo',
        'url': '',
		'date': '25/12/2015',
        'text': ['Agraeixo la teva confiança que t\'ha portat al meu centre de fisioteràpia i alli em trobaràs també a l\'any vinent, sempre que em necessitis.',
                 'I si vols millorar la salut d\'una altra persona, hi tinc preparats',
                 '<strong>Vals de regal</strong>','','Una abraçada','Martina Narloch']
      }
    ];*/

    this.getNews = getNews;

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
  }

})();
