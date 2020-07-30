module.exports.login = function(application,req,res)
{ 
    res.render('login/index',{validation : ''}); 
}
 
module.exports.authenticate = function(application,req,res)
{
    var dadosForm = req.body;

    req.assert('login','Login não pode ser vazio').notEmpty(); 
    req.assert('password','Senha não pode ser vazia').notEmpty(); 
    
    var erros = req.validationErrors(); 
    if(erros)
    {
        res.render('login/index',{validation : erros});
        return;
    }

    var connection = application.config.dbConnection();
    var usersModel = new application.app.models.UsersDAO(connection);
    // application.get('io').emit('sendEntrySystem',{login : dadosForm.login, mensagem: " entrou"}); 
    
    usersModel.authenticate(dadosForm,function(error,resultUser){ 
        if(resultUser.length  == 0)
        { 
            res.render('login/index',{validation : {}}); 
        }else{   
            req.session.authorized = true; 
            req.session.aut_id = resultUser[0].id; 
            req.session.authorized =  resultUser[0].login;  
            res.render('home/index');  

        }
    });
}