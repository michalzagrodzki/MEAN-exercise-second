'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
	function($stateProvider) {
		// Categories state routing
		$stateProvider.
      // CREATE
		state('createCategory', {
			url: '/categories/create',
			templateUrl: 'modules/categories/views/create-category.client.view.html'
		}).
      // READ Categories
		state('listCategories', {
			url: '/categories',
			templateUrl: 'modules/categories/views/categories.client.view.html'
		}).
      // READ Single Category
      state('viewCategory', {
        url: '/categories/:categoryId',
        templateUrl: 'modules/categories/views/view-category.client.view.html'
    }).
      // EDIT Single Category
      state('editCategory', {
        url: '/categories/:categoryId/edit',
        templateUrl: 'modules/categories/views/edit-category.client.view.html'
    });

	}
]);
