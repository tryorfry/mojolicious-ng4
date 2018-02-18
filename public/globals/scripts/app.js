'use strict';

/**
 * Main module of the application.
 */
angular
    .module('mojoApp', [
    'ngResource',
    'ngRoute'
        
      /*    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch'
*/
  ])
  .config(function ($routeProvider) {
      $routeProvider
        // nav routes
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })

        .when('/order', {
            templateUrl: 'views/order.html',
            controller: 'OrderCtrl'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })

        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })

        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
      
        .otherwise({
            redirectTo: '/'
        });
  });
