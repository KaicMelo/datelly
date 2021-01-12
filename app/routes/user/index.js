module.exports = function(application){
    application.get('/user',function(req,res){
        application.app.controllers.userController.index(application,req,res);  
    });
    application.get('/MyUser',function(req,res){
        application.app.controllers.userController.MyUser(application,req,res);  
    });
    application.put('/user/:id',function(req,res){
        application.app.controllers.userController.userUpdate(application,req,res); 
    });
}