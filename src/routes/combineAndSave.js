const wreck = require('wreck');
const externals = require('./externals');
const { combine } = require('./combine');
const models = require('../../models');

/**
 * Convert the keys of the object to lower case
 * because that is what the model expects
 * @param {Object} obj
 * @returns {Object}
 */
function convertKeysToLower(obj) {
  let key;
  const keys = Object.keys(obj);
  let n = keys.length;
  const newobj = {};
  while (n) {
    n -= 1;
    key = keys[n];
    newobj[key.toLowerCase()] = obj[key];
  }
  return newobj;
}

/**
 * Returns a promise which has an object containing
 * whether the operation was successful
 * @return {Object}
 */
function handle() {
  return wreck.get(externals.allBooks)
    .then(allBooks => combine(allBooks))
    .then(allPromises => Promise.all(allPromises))
    .then((combinedBookArg) => {
      const combinedBooks = combinedBookArg
        .map(obj => convertKeysToLower(obj));
      return models.books.bulkCreate(combinedBooks)
        .then(() => 201)
        .catch(() => 200);
    });
}
module.exports.handle = handle;

module.exports.route = {
  path: '/combineAndSave',
  method: 'GET',
  handler: (req, res) => {
    handle().then((myObj) => {
      const resposeObject = {
        statusCode: myObj,
      };
      res(resposeObject);
    });
  },
};
