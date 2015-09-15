'use strict';

module.exports = function(app) {

  var products = require('../../app/controllers/products.server.controller');

  // route for listing Products
  app.route('/products')

    // route for GET Products
    .get(products.list)

    // route for POST Products
    .post(products.create);

  // route for single Product
  app.route('/products/:productId')

    // route for GET single Product
    .get(products.read)

    // route for UPDATE single Product
    .put(products.update)

    // route for DELETE single Product
    .delete(products.delete);

};
