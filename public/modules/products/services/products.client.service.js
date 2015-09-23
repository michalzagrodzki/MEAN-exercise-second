'use strict';

//Categories service used to communicate Categories REST endpoints
angular.module('products').factory('Products', ['$resource',
  function($resource) {
    return $resource('products/:productId', { productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
