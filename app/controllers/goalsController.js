module.exports.login = function(application,req,res)
{
    // var dadosForm = req.body;

    // req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    // req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);
    
    // var erros = req.validationErrors();
    
    // if(erros)
    // {
    //     res.render('index',{validation : erros});
    //     return;
    // }

    // application.get('io').emit('msgParaCliente',{apelido : dadosForm.apelido, mensagem: " acabou de entrar no chat"}); 

    res.render('login/index');
}

module.exports.authenticate = function(application,req,res)
{
    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);
    
    goalsModel.getGoals(function(error,result){
        res.render('home/index',{goals: result});  
      });  
}