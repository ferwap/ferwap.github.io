(function() {
  'use strict';

  angular
      .module('pasturabosc')
      .service('methodologies', methodologies);

  /** @ngInject */
  function methodologies($http, $q) {
    /*var methodologiesData = [
      {
        'title': 'Des del Fisiocam et desitjo',
        'image': 'methodologies/nadal2015.jpg',
		'description': 'Des del Fisiocam et desitjo',
        'url': '',
		'date': '25/12/2015',
        'text': ['Agraeixo la teva confiança que t\'ha portat al meu centre de fisioteràpia i alli em trobaràs també a l\'any vinent, sempre que em necessitis.',
                 'I si vols millorar la salut d\'una altra persona, hi tinc preparats',
                 '<strong>Vals de regal</strong>','','Una abraçada','Martina Narloch']
      }
    ];*/

    this.getMethodologies = getMethodologies;
	this.getMethodologiesBy = getMethodologiesBy;

    function getMethodologies() {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/methodologies.json').success(function(data) {
			defered.resolve(data);
		}).error(function(err) {
			defered.reject(err)
        });
		
		return promise;
    }
	
    function getMethodologiesBy(methodologiesId) {
		var defered = $q.defer();
        var promise = defered.promise;
		
		$http.get('assets/content/methodologies.json').success(function(data) {	
			for(var i = 0; i<data.length;i++) {
				if (data[i].id == methodologiesId) {
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
