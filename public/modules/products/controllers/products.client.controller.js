'use strict';

angular.module('products').controller('ProductsController', ['$scope', 'Products',
	function($scope, Products) {

    // List Categories
    $scope.find = function() {
      $scope.products = Products.query();
    };

	}
]);
