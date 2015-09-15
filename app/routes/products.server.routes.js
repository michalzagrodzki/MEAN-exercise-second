'use strict';

module.exports = function(app) {

  var products = require('../../app/controllers/products.server.controller');
  var users = require('../../app/controllers/users.server.controller');

  // route for listing Products
  app.route('/products')

    // route for GET Products
    .get(products.list)

    // route for POST Products
    .post(users.requiresLogin, products.create);

  // route for single Product
  app.route('/products/:productId')

    // route for GET single Product
    .get(products.read)

    // route for UPDATE single Product
    .put(users.requiresLogin, products.update)

    // route for DELETE single Product
    .delete(users.requiresLogin, products.delete);

  // binding article middleware
  app.param('productId', products.productByID);

};
