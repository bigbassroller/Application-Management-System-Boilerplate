'use strict';

/**
* @ngdoc overview
* @name goldfishApp
* @description
* # goldfishApp
*
* Main module of the application.
*/
angular
.module('goldfishApp', [
	'ui.router',
	'ui.bootstrap'
	])
.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		})
		.state('stuff', {
			url: '/stuff',
			templateUrl: 'views/stuff.html'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile.html'
		});
	$locationProvider.html5Mode(true);
		
}]);


