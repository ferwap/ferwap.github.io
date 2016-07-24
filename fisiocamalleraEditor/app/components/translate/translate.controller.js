(function() {
  'use strict';

  angular
    .module('fisioCamalleraEditor')
    .controller('TranslateController', TranslateController);

  /** @ngInject */
  function TranslateController(ngTranslation, $log) {
    var vm = this;
    vm.changeLanguage = function (lang) {
        $log.debug('TranslateController.changeLanguage to '+lang);
        ngTranslation.use(lang);
    }
  }
})();