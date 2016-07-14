
/*================================================================
=>                   Service = flickrFeed
==================================================================*/
/*global app*/

app.service('flickrFeed', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {

	'use strict';

	this.getFeed = function (authorId) {
		var deffered = $q.defer();

		$http({
			method: 'GET',
			url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
			params : {
				id : authorId
			}
		}).then(function succesCallback(data) {
			deffered.resolve(data);
		}, function errorCallback(err) {
			deffered.reject(err);
		}).finally(function() {
			//called no matter success or failure
		});

		return deffered.promise;
    };

}]);


/*-----  End of Service = flickrFeed  ------*/