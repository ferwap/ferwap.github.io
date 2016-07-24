(function() {
  'use strict';

  angular
    .module('pasturaboscEditor')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, ngTranslationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
      
    ngTranslationProvider
      .setDirectory('app/i18n')
      .setFilesSuffix('.json')
      .langsFiles({
        en: 'en',
        fr: 'fr',
        es: 'es',
        ca: 'ca'
      })
      .fallbackLanguage('ca');
      
  }

})();
