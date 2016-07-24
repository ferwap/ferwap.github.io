(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, ngTranslation, $location) {
      ngTranslation.use(
        $location.search().lang
      );
    $log.debug('runBlock end');
  }

})();
