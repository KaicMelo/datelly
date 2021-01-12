module.exports.index = function(application,req,res)
{  
    if(req.session.authorized == true)
    {
        res.render('love/index'); 
        return;
    }
    res.render('login/index');
    return;
}

module.exports.MyLove = function(application,req,res)
{
    var connection = application.config.dbConnection();
    var notificationModel = new application.app.models.NotificationDAO(connection);
    var id = req.session.aut_id;
    
    notificationModel.myLove(id,function(error,result){

        var user = {
            response:result,
            myUser:req.session.aut_id 
        }
        
       res.send({ data: user });
      });   
}

module.exports.accept = function (application, req, res) {
    var connection = application.config.dbConnection();
    var notificationModel = new application.app.models.NotificationDAO(connection);
    var userModel = new application.app.models.UsersDAO(connection);

    // var id = req.session.aut_id;

    var data = req.body;

    notificationModel.accept(data.id,data.status, function (error, result) {
        userModel.updateGirlfriend(data.user,data.girlfriend, function (userError, userResult) {
            res.status(200).json({ response:"Atualizado com sucesso" });
        });
    });
}

module.exports.delete = function (application, req, res) {
    var connection = application.config.dbConnection();
    var notificationModel = new application.app.models.NotificationDAO(connection);
    var userModel = new application.app.models.UsersDAO(connection);

    var data = req.body;

    notificationModel.delete(data.id, function (error, result) {
        if(result.affectedRows == 1){
            userModel.deleteGirlfriend(data.user,data.girlfriend, function (userError, userResult) {
                res.status(200).json({ response:"Deletado com sucesso" });
            });
        } 
    });
}