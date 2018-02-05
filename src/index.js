const Hapi = require('hapi');

const combineRoute = require('./routes/combine').route;

const server = new Hapi.Server();
const port = 8080;

server.connection({
  host: 'localhost',
  port,
});

server.route(combineRoute);

if (!module.parent) {
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
