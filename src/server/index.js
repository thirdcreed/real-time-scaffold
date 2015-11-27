var Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 4000, labels: ['rest'] });
server.connection({ port: 4001, labels: ['realtime'] });
const io = require('socket.io')(server.select('realtime').listener);

io.on('connection', function (socket) {

    socket.emit('test');
    socket.on('whatevs',function(t){
     console.log(t);
    });

});

server.register(require('inert'), function (err) {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/test',
        handler: function (request, reply) {
            reply.file('./index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/app',
        handler: function (request, reply) {
            reply.file('../client/_realtime/app.js');
        }
    });


});

server.start(function(err){
  console.log('Server running at: ', server.connections.map(x => x.info.uri));
});
