//IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
var server = require('./config/server');
var io = require('socket.io')(server);

io.on('connection',function(socket){ 
    console.log(`Socket ON ${socket.id}`);

    socket.on('sendMessage ',data =>{
        console.log(data);
        console.log('data');
    });

    socket.on('disconnect',function(){ 
        socket.emit('msgParaCliente', 'Dog saiu do chat');
    });
}); 

//PARAMETRIZAR AS PORTAS QUE SERÃO ESCUTADAS
var server = server.listen(3000,function(){
    console.log('Servidor Up');
});