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