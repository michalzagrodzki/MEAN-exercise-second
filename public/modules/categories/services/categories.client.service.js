'use strict';

angular.module('categories').factory('Categories', [ '$resource',
	function($resource) {
		// Public API
		return $resource('categories/:categoryId', {
      categoryId: '@_id'
    },  {
        update: {
          method: 'PUT'
        }
    });
  }
]);
