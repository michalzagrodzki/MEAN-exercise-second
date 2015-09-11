'use strict';

module.exports = function(app) {

  var categories = require('../../app/controllers/categories.server.controller');

  // route for GET categories
  app.route('/categories')
    .get(categories.list);
};
