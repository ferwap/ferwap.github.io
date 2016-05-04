(function() {
  'use strict';

  angular
    .module('pasturabosc')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;
      
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
})();
