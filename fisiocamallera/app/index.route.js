(function() {
  'use strict';

  angular
    .module('fisioCamallera')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
    .state('contactus', {
        url: '/contactus',
        templateUrl: 'app/contactus/contactus.html',
        controller: 'ContactUsController',
        controllerAs: 'contactus'
      })
    .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsController',
        controllerAs: 'news'
      })
    .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })
    .state('news-detail', {
        url: '/news-detail/:newsId',
        templateUrl: 'app/news-detail/news-detail.html',
        controller: 'NewsDetailController',
        controllerAs: 'detail'
      })	  
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
