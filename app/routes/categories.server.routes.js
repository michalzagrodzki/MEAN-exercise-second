'use strict';

module.exports = function(app) {
app.route('/categories')
  .get(function (request, response) {
    response.json([
      { name: 'Beverages' },
      { name: 'Condiments' }
    ]);
  });
};
