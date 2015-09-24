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
        category: this.category,
        name: this.name,
        quantityPerUnit: this.quantityPerUnit,
        unitPrice: this.unitPrice,
        unitsInStock: this.unitsInStock,
        unitsOnOrder: this.unitsOnOrder,
        discontinued: this.discontinued
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
