'use strict';

angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Products',
	function($scope, $stateParams, $location, Products) {

    var appendCategory = function appendCategory(p) {
      p.category = $filter('filter')($scope.categories, {_id: p.category})[0];
    };

    // List Products
    $scope.find = function() {
      Products.query(function loadedProducts(products) {
        products.forEach(appendCategory);
        $scope.products = products;
      });
    };

    // CREATE new Product
    $scope.create = function() {
      // Create new Product object
      var product = new Products ({
        category: this.category,
        name: this.name,
        quantityPerUnit: this.quantityPerUnit,
        unitPrice: this.unitPrice,
        unitsInStock: this.unitsInStock,
        unitsOnOrder: this.unitsOnOrder
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

    // READ single Product
    $scope.findOne = function() {
      $scope.product = Products.get({
        productId: $stateParams.productId
      });
    };

	}
]);
