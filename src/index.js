const Hapi = require('hapi');

const routes = require('./routes');

const server = new Hapi.Server();
const port = 8080;

server.connection({
  host: 'localhost',
  port,
  routes: { cors: true },
});

// Add all the routes from ./routes
server.route(routes);

// If testing, dont start server here
if (!module.parent) {
  // Start server
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

// Export server for testing
module.exports = server;
