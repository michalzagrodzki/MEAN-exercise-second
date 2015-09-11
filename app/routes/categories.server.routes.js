'use strict';

module.exports = function(app) {

  var categories = require('../../app/controllers/categories.server.controller');

  // routes for Categories
  app.route('/categories')

    // route for GET categories
    .get(categories.list)

    // route for POST categories
    .post(categories.create);

  // routes for single Category
    app.route('/categories/:categoryId')
      // route for GET single category
      .get(categories.read)

      // route for UPDATE single category
      .put(categories.update)

      // route for DELETE single category
      .delete(categories.delete)
};
