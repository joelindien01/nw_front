'use strict';

/**
 * @ngdoc function
 * @name neverWriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the neverWriteApp
 */
angular.module('neverWriteApp')
  .controller('MainCtrl', function () {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.notes = [
      {
        "id":1,
        "title":"title 1"
      },
      {
        "id":2,
        "title":"title 2"
      },

    ];

  });
