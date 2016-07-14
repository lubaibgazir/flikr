
/*================================================================
=>                  Controller = Author
==================================================================*/
/*global app*/

app.controller('AuthorCtrl', ['$scope', '$state', 'flickrFeed', '$rootScope', function ($scope, $state, flickrFeed, $rootScope) {

	'use strict';

	//console.log('Controller ===  AuthorCtrl');

	$scope.loading = true;
	$scope.getServiceList = function(authorId) {
		$scope.authorId = authorId;
		flickrFeed.getFeed($scope.authorId).then(function(response) {
			// work-around since data is returned as a string
			response = response.data;
			response = response.replace('jsonFlickrFeed(', '');
	    	response = response.replace('})', '}');
	    	response = response.replace(/\\'/g, "'");
	    	response = JSON.parse(response);
			$scope.feedItems = response.items;
			$scope.userName = $scope.feedItems[0].author;
			console.log('feedItems:', $scope.feedItems);
		}, function(error) {
			console.log('error', error);
		}).finally(function() {
			$scope.loading = false;
		});	
	}

	$scope.userId = $state.params.authorId; 
	
	
	$scope.friends = function(authorId, authorName) {
		$state.go('friends',{authorId: authorId, authorName: authorName});
	}


}]);


/*-----  End of Controller = Author  ------*/



