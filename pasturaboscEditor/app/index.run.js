(function() {
  'use strict';

  angular
    .module('pasturaboscEditor')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, ngTranslation, $location) {
      ngTranslation.use(
        $location.search().lang
      );
    $log.debug('runBlock end');
  }

})();
