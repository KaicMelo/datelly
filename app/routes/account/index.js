module.exports = function(application){
    application.get('/register',function(req,res){
        application.app.controllers.accountController.index(application,req,res);  
    });
    
    application.post('/account/create',function(req,res){ 
        application.app.controllers.accountController.create(application,req,res);  
    });
}