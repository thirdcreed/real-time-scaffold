var Hapi = require('hapi');
var handleErrors = require('./error');

const server = new Hapi.Server();

server.connection({ port: 4000, labels: ['rest'] });
server.connection({ port: 4001, labels: ['realtime'] });

server.register(require('./realtime'), handleErrors);

server.register(require('inert'), function (err) {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./src/server/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/app',
        handler: function (request, reply) {
            reply.file('./src/client/_realtime/app.js');
        }
    });

});

server.start(function(err){
  console.log('Server running at: ', server.connections.map(x => x.info.uri));
});
