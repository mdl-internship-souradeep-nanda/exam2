const models = require('../../models');

/**
 * Returns a promise which resolves to liked or not
 * @param {Ingeger} integer
 * @return {Promise}
 */
function handle(id) {
  return models.books.update(
    { likes: 1 },
    { where: { id } },
  );
}
module.exports.handle = handle;

module.exports.route = {
  path: '/like/{id}',
  method: 'GET',
  handler: (req, res) => {
    handle(req.params.id).then((msg) => {
      res('liked');
    });
  },
};
