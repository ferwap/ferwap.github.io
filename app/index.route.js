(function() {
  'use strict';

  angular
    .module('pasturabosc')
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
        url: '/about',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
    .state('contactus', {
        url: '/contact',
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
    .state('recipes', {
        url: '/recipes',
        templateUrl: 'app/recipes/recipes.html',
        controller: 'RecipesController',
        controllerAs: 'recipes'
      })
    .state('methodologies', {
        url: '/methodologies',
        templateUrl: 'app/methodologies/methodologies.html',
        controller: 'MethodologiesController',
        controllerAs: 'methodologies'
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
    .state('recipes-detail', {
        url: '/recipes-detail/:recipesId',
        templateUrl: 'app/recipes-detail/recipes-detail.html',
        controller: 'RecipesDetailController',
        controllerAs: 'detail'
      })	  
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
