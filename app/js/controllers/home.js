
/*================================================================
=>                  Controller = Home
==================================================================*/
/*global app*/

app.controller('HomeCtrl', ['$scope', 'flickrFeed', '$rootScope', '$state', function ($scope, flickrFeed, $rootScope, $state) {

	'use strict';

	//console.log('Controller ===  HomeCtrl');
	$scope.loading = true;

	$scope.getServiceList = function(authorId) {
		flickrFeed.getFeed($scope.authorId).then(function(response) {
			// work-around since data is returned as a string
			response = response.data;
			response = response.replace('jsonFlickrFeed(', '');
	    	response = response.replace('})', '}');
	    	response = response.replace(/\\'/g, "'");
	    	response = JSON.parse(response);
			$scope.feedItems = response.items;
			console.log('feedItems:', $scope.feedItems);
		}, function(error) {
			console.log('error', error);
		}).finally(function() {
			$scope.loading = false;
		});	
	}

	$scope.authorDetail = function(authorId) {
		$state.go('author', {authorId: authorId});
	};


	
	


}]);


/*-----  End of Controller = Home  ------*/



