const wreck = require('wreck');
const externals = require('./externals');

/**
 * Returns a promise which has an object containing
 * whether the operation was successful
 * @return {Object}
 */
function handle() {
  return wreck.get(externals.combine);
}
module.exports.handle = handle;

module.exports.route = {
  path: '/combineAndSave',
  method: 'GET',
  handler: (req, res) => {
    handle().then((myObj) => {
      const resposeObject = {
        created: true,
      };
      res(resposeObject);
    });
  },
};
