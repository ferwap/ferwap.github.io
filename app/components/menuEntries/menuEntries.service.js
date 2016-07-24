(function() {
  'use strict';

  angular
      .module('fisioCamallera')
      .service('menuEntries', menuEntries);

  /** @ngInject */
  function menuEntries() {
    var data = [
      {
        'title': 'Sobre mi',
        'url': '#/about',
        'description': 'conoceme',
        'logo': 'LOGO MANS.jpg'
      },
      {
        'title': 'Contacto',
        'url': '#/contact',
        'description': 'Mis datos de contacto',
        'logo': 'LOGO MANS.jpg'
      },
      {
        'title': 'Contacta conmigo',
        'url': '#/contactus',
        'description': 'Envia un email',
        'logo': 'LOGO MANS.jpg'
      },
      {
        'title': 'Noticies',
        'url': '#/news',
        'description': 'Ultimas noticias',
        'logo': 'LOGO MANS.jpg'
      }
    ];

    this.getMenuEntries = getMenuEntries;

    function getMenuEntries() {
      return data;
    }
  }

})();
