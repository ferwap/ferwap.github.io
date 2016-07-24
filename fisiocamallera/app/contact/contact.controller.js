(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController() {
    var vm = this;
      
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }
})();
