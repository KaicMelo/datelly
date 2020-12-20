module.exports = function(application){
    application.get('/love',function(req,res){
        application.app.controllers.loveController.index(application,req,res);  
    });
    application.get('/MyLove',function(req,res){
        application.app.controllers.loveController.MyLove(application,req,res);  
    });
}