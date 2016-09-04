'use strict';

/**
 * @ngdoc overview
 * @name neverWriteApp
 * @description
 * # neverWriteApp
 *
 * Main module of the application.
 */
angular
  .module('neverWriteApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/notebooks', {
        templateUrl: 'views/notebooks.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
