const Hapi = require('hapi');

const combineRoute = require('./routes/combine').route;
const combineAndSaveRoute = require('./routes/combineAndSave').route;
const likeRoute = require('./routes/like').route;
const unlikeRoute = require('./routes/unlike').route;

const server = new Hapi.Server();
const port = 8080;

server.connection({
  host: 'localhost',
  port,
});

// Add the combine route to all routes
server.route(combineRoute);

// Add the combine and save route to all routes
server.route(combineAndSaveRoute);

// Add the like route to all routes
server.route(likeRoute);

// Add the unlike route to all routes
server.route(unlikeRoute);

// If testing, dont start server here
if (!module.parent) {
  // Start server
  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
}

// Export server for testing
module.exports = server;
