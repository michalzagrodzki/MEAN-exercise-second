'use strict';

module.exports = function(app) {

  var categories = require('../../app/controllers/categories.server.controller');

  // routes for Categories
  app.route('/categories')

    // route for GET Categories
    .get(categories.list)

    // route for POST Categories
    .post(categories.create);

  // routes for single Category
  app.route('/categories/:categoryId')

    // route for GET single Category
    .get(categories.read)

    // route for UPDATE single Category
    .put(categories.update)

    // route for DELETE single Category
    .delete(categories.delete)
};
