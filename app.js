//IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
var app = require('./config/server');

//PARAMETRIZAR AS PORTAS QUE SERÃO ESCUTADAS
app.listen(3000,function(){
    console.log('Servidor Up');
});