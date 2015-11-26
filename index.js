var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 4000, labels: ['rest'] });
server.connection({ port: 4001, labels: ['realtime'] });

var io = require('socket.io')(server.select('realtime').listener);

io.on('connection', function (socket) {

    socket.emit('test');
    socket.on('whatevs',function(){
    
    });

});


server.start(function(err){
console.log(err);
});
