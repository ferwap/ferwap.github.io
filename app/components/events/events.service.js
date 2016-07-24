(function() {
  'use strict';

  angular
      .module('fisioCamallera')
      .service('events', events);

  /** @ngInject */
  function events() {
    var data = [
      {
        'title': 'primer curso',
        'image': '',
        'url': '',
		'date': '29/02/2016',
        'text': 'primer curso'
      },
      {
        'title': 'segundo curso',
        'image': '',
        'url': '',
		'date': '01/03/2016',
        'text': 'segundo curso'
      }
    ];

    this.getEvents = getEvents;

    function getEvents() {
      return data;
    }
  }

})();
