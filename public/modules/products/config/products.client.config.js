'use strict';

// Products module config
angular.module('products').run(['Menus',
	function(Menus) {
    Menus.addMenuItem('topbar', 'Products', 'products', 'dropdown', '/products(/create)?');
    Menus.addSubMenuItem('topbar', 'products', 'List Products', 'products');
    Menus.addSubMenuItem('topbar', 'products', 'New Product', 'products/create');
	}
]);
