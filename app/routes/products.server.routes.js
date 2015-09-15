'use strict';

module.exports = function(app) {

  var products = require('../../app/controllers/products.server.controller');

  // route for products
  app.route('/products')

    // route for GET products
    .get(products.list)

    // route for POST products
    .post(products.create);

  // route for single product
  app.route('/products/:productId')

    // route for GET single product
    .get(products.read)

    // route for UPDATE single product
    .put(products.update)

    // route for DELETE single product
    .delete(products.delete);

};
