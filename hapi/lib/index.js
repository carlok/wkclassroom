'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route({
    config: {
        cors: {
            origin: ['*'],
            credentials: false
        }
    },
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply({a: 'bla bla', b: [2, 3, 1, 5]});
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
