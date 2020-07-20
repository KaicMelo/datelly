//IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
var app = require('./config/server');

//PARAMETRIZAR AS PORTAS QUE SERÃO ESCUTADAS
var server = app.listen(80,function(){
    console.log('Servidor Up');
});

var io = require('socket.io').listen(server);

app.set('oi',io);

io.on('connection',function(socket){ 
    console.log('Socket ON')

    socket.on('disconnect',function(){ 
        // socket.emit('msgParaCliente', 'Dog saiu do chat');
    });

});