module.exports = function(application){
    application.get('/',function(req,res){
        application.src.controllers.loginController.login(application,req,res);   
    });

    application.post('/authenticate',function(req,res){
        application.src.controllers.loginController.authenticate(application,req,res);
    });
}