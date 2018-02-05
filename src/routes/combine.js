const Wreck = require('wreck');
const externals = require('./externals');

function handle() {
  return Wreck.get(externals.allBooks);
}

module.exports.handle = handle;

module.exports.route = {
  path: '/combine',
  method: 'GET',
  handler: async (req, res) => {
    handle().then((awsRes) => {
      res(awsRes.payload);
    });
  },
};
