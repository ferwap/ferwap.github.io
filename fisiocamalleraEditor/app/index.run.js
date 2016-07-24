(function() {
  'use strict';

  angular
    .module('fisioCamalleraEditor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, ngTranslation, $location) {
      ngTranslation.use(
        $location.search().lang
      );
    $log.debug('runBlock end');
  }

})();
