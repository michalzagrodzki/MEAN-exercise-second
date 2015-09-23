'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Products',
	function($scope, $stateParams, $location, Products) {

    // List Categories
    $scope.find = function() {
      $scope.products = Products.query();
    };

    // CREATE new Category
    $scope.create = function() {
      // Create new Product object
      var product = new Product ({
        name: this.name,
        description: this.description
      });

      // Redirect after save
      product.$save(function(response) {
        $location.path('products/' + response._id);

        // Clear form fields
        $scope.name = '';
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

	}
]);
