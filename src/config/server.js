//IMPORTAR O MODULO FRAMEWORK EXPRESS
var express = require('express');

//IMPORTAR O MODULO FRAMEWORK CONSIGN
var consign = require('consign');

//IMPORTAR O MODULO FRAMEWORK BODY-PARSE
var bodyParse = require('body-parser');

//IMPORTAR O MODULO FRAMEWORK EXPRESS-VALIDATOR
var expressValidator = require('express-validator');

//IMPORTAR O MODULO FRAMEWORK EXPRESS-SESSION
var expressSession = require('express-session');

//INICIAR O OBJETO EXPRESS
var app = express();

//SETAR AS VARIAVEIS DE VIEW DO EXPRESS
// app.set('view engine','ejs');
// app.set('views','./app/views');

//CONFIGURAR O MIDDLEWARE EXPRESS.STATIC
app.use(express.static('./public'));

//CONFIGURAR O MIDDLEWARE BODY-PARSE
app.use(bodyParse.urlencoded({extended:true}));

//CONFIGURAR O MIDDLEWARE EXPRESS-VALIDATOR
app.use(expressValidator());

//CONFIGURAR O MIDDLEWARE EXPRESS-SESSION
app.use(expressSession({
    secret: 'dsadsasda',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static('./public'));
app.use(express.static('./routes'));

//EFETUAR O AUTOLOAD DAS ROTAS,MIDDLEWARE,CONTROLLERS QUANDO O OBJETO APP FOR CRIADO
// consign().
//     include('app/routes')
//     .then('app/models')
//     .then('app/controllers')
//     .then('config/dbConnection.js')
//     .into(app);

//EXPORTAR O OBJETO APP
module.exports = app;