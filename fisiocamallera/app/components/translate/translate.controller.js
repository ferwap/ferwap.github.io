(function() {
  'use strict';

  angular
    .module('fisioCamallera')
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