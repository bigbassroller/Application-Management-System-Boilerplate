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
	'ui.router'
	])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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
		.state('contact', {
			url: '/contact',
			templateUrl: 'views/contact.html'
		});
		
}]);