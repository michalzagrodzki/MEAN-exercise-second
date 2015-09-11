'use strict';

module.exports = function(app) {

  var categories = require('../../app/controllers/categories.server.controller');

  // routes for Category model
  app.route('/categories')

    // route for GET categories
    .get(categories.list)

    // route for POST categories
    .post(categories.create)
};
