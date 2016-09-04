'use strict';

/**
 * @ngdoc directive
 * @name neverWriteApp.directive:menu
 * @description
 * # menu
 */
angular.module('neverWriteApp')
  .directive('menu', function () {
    return {
      templateUrl: 'views/menu.html',
      restrict: 'E',
      replace:true,
      transclude:true,
      scope:false
    };
  });
