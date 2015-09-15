'use strict';

module.exports = function(app) {

  var categories = require('../../app/controllers/categories.server.controller');
  var users = require('../../app/controllers/users.server.controller');

  // routes for Categories
  app.route('/categories')

    // route for GET Categories
    .get(categories.list)

    // route for POST Categories
    .post(users.requiresLogin, categories.create);

  // routes for single Category
  app.route('/categories/:categoryId')

    // route for GET single Category
    .get(categories.read)

    // route for UPDATE single Category
    .put(users.requiresLogin, categories.update)

    // route for DELETE single Category
    .delete(users.requiresLogin, categories.delete);

  // binding article middleware
  app.param('categoryId', categories.categoryByID);
  
};
