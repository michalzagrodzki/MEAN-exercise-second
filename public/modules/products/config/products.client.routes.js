'use strict';

//Setting up route
angular.module('products').config(['$stateProvider',
	function($stateProvider) {
		// Products state routing
		$stateProvider.
    // CREATE
    state('createProduct', {
      url: '/products/create',
      templateUrl: 'modules/products/views/create-product.client.view.html'
    }).
    // READ Products
    state('listProducts', {
      url: '/products',
      templateUrl: 'modules/products/views/products.client.view.html'
    }).
    // READ Single Product
    state('viewProduct', {
      url: '/products/:productId',
      templateUrl: 'modules/products/views/view-product.client.view.html'
    });
	}
]);
