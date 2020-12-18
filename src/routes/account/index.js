module.exports = function(application){
    application.get('/account/create',function(req,res){
        application.app.controllers.accountController.create(application,req,res);  
    });
}