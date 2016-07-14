
/*================================================================
=>                  App = flikr
==================================================================*/
/*global angular*/

var app = angular.module('flikr', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "ui.router"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		}).state('author', {
			url: '/author/:authorId',
			templateUrl: 'templates/author.html'
		}).state('friends', {
			url: '/author/:authorId/:authorName/friends',
			templateUrl: 'templates/friends.html'
		});

	$urlRouterProvider.otherwise('home');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  flikr App Run()  
==================================================================*/

app.run(['$rootScope', function ($rootScope) {
	
	'use strict';

	//console.log('Angular.js run() function...');
}]);





/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */