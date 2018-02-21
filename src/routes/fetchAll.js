const models = require('../../models');
const groupByKey = require('../helper/groupByKey');

/**
 * Returns a promise which has an object containing
 * whether the operation was successful
 * @return {Object}
 */
function fetchAll() {
  return models.books.findAll();
}
module.exports.fetchAll = fetchAll;

module.exports.route = {
  path: '/fetchAll',
  method: 'GET',
  handler: (req, res) => {
    fetchAll().then((allBooks) => {
      res(groupByKey(allBooks, 'author'));
    });
  },
};
