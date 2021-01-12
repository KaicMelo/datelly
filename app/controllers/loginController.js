module.exports.login = function(application,req,res)
{ 
    res.render('login/index',{validation : ''}); 
}
 
module.exports.authenticate = function(application,req,res)
{
    var dadosForm = req.body;

    var connection = application.config.dbConnection();
    var usersModel = new application.app.models.UsersDAO(connection);
    
    usersModel.authenticate(dadosForm,function(error,resultUser){
        if(resultUser.length  == 0)
        { 
            res.status(404).json({message: 'Erro ao realizar login'});  
        }else{   
            req.session.authorized = true; 
            req.session.aut_id = resultUser[0].id;
            res.status(200).json({message: 'Login realizado com sucesso'});
        }
    });
}