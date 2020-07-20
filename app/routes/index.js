module.exports = function(application){
    application.get('/',function(req,res){
        
        application.app.controllers.loginController.login(application,req,res);  
    });

    application.post('/',function(req,res){
        application.app.controllers.loginController.authenticate(application,req,res); 
    });

    application.get('/getGoals',function(req,res){
        var connection = application.config.dbConnection();
        var goalsModel = new application.app.models.GoalsDAO(connection);
        
        goalsModel.getGoals(function(error,result){
            res.send(result);  
          });  
    });

    application.get('/createGoals',function(req,res){
        var connection = application.config.dbConnection();
        var goalsModel = new application.app.models.GoalsDAO(connection);
        
        goalsModel.getGoals(function(error,result){
            res.send(result);  
          }); 
    });
}