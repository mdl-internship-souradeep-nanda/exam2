function handle() {
  return 'OK';
}

module.exports.handle = handle;

module.exports.route = {
  path: '/combine',
  method: 'GET',
  handler: (req, res) => {
    const responseString = handle();
    res(responseString);
  },
};
