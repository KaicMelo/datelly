module.exports.login = function(application,req,res)
{ 
    res.render('login/index',{validation : ''}); 
}
 
module.exports.authenticate = function(application,req,res)
{
    var dadosForm = req.body;

    req.assert('login','Insira seu login').notEmpty();
    req.assert('login','Login deve conter entre 4 e 15 caracteres').len(4,15);
    
    var erros = req.validationErrors(); 
    if(erros)
    {
        res.render('login/index',{validation : erros});
        return;
    }

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);
    
    goalsModel.getGoals(function(error,result){ 
        
        // application.get('io').emit('msgParaCliente',{login : dadosForm.login, mensagem: " acabou de entrar no chat"}); 
        res.render('home/index',{goals: result});  
      });  
}