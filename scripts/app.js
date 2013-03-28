'use strict';

var angularkeepApp = angular.module('angularkeepApp',['ui.bootstrap','ngResource','mongolab']);

angularkeepApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);