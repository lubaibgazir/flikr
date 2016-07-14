
/*================================================================
=>                   Service = friendsService
==================================================================*/
/*global app*/

app.service('friendsService', ['$rootScope', '$q', '$http', function ($rootScope, $q, $http) {

	'use strict';

	this.getFeedFriends = function (authorId) {
		var deffered = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/feeds/photos_friends.gne?format=json',
			params: {
				user_id: authorId 
			}
		}).then(function succesCallback(data){
			deffered.resolve(data);
		}, function errorCallback(err) {
			deffered.reject(err);
		}).finally(function() {
			//called no matter success or failure
		});
        return deffered.promise;
    };

}]);


/*-----  End of Service = friendsService  ------*/