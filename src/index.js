const Hapi = require('hapi');

const combineRoute = require('./routes/combine').route;

const server = new Hapi.Server();
const port = 8080;

server.connection({
  host: 'localhost',
  port,
});

// Add the combine route to all routes
server.route(combineRoute);

// If testing, dont start server here
if (!module.parent) {
  // Start server
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

// Export server for testing
module.exports = server;
