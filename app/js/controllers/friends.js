
/*================================================================
=>                  Controller = Friends
==================================================================*/
/*global app*/

app.controller('FriendsCtrl', ['$scope', '$state', 'friendsService', '$rootScope', function ($scope, $state, friendsService, $rootScope) {

	'use strict';
	$scope.loading = true;
	$scope.hasData = true;
	$scope.userId = $state.params.authorId;
	friendsService.getFeedFriends($scope.userId).then(function(response) {
		// work-around since data is returned as a string
		response = response.data;
		response = response.replace('jsonFlickrFeed(', '');
    	response = response.replace('})', '}');
    	response = response.replace(/\\'/g, "'");
    	response = JSON.parse(response);
    	$scope.friendsFeedItems = response.items;
    	if($scope.friendsFeedItems.length == 0) {
    		$scope.hasData = false;
    	}
		console.log('friendsFeedItems: ', $scope.friendsFeedItems);
		$scope.authorName = $state.params.authorName
	}, function(error) {
		console.log('error: ', error);
	}).finally(function(){
		$scope.loading = false;
	});

	//console.log('params: ', $state.params);

	//console.log('Controller ===  FriendsCtrl');
}]);


/*-----  End of Controller = Friends  ------*/



