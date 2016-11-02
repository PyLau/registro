(function() {
  'use strict';

  angular
    .module('registro')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '', // No route
        abstract: true,  // Abstract because we need a root for layout
        views: {
          'header': {
            templateUrl: 'app/components/commons/header.html', // Header
            controller: 'HeaderController', // Controller Header
            controllerAs: 'register'
          },
          'footer':{
            templateUrl: 'app/components/commons/footer.html', // Footer
            controller: 'FooterController',  //Controller Footer
            controllerAs: 'footer'
          }
        }        
      })
      .state('app.home', {
        url: '/registro',
        views: {
          'container@': {
            templateUrl: 'app/components/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
          }
        }
      })
      .state('app.login', {
        url: '/login',
        views: {
          'container@': {
            templateUrl: 'app/components/login/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
          }
        }
      })    

    $urlRouterProvider.otherwise('/');
  }

})();
