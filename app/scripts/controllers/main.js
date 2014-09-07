'use strict';

/**
 * @ngdoc function
 * @name goldfishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goldfishApp
 */
angular.module('goldfishApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
