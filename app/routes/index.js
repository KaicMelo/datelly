module.exports = function(application){
    application.get('/',function(req,res){
        res.render('login/index');
        // application.app.controllers.goalsController.login(application,req,res);
    });
    application.post('/',function(req,res){
        application.app.controllers.goalsController.authenticate(application,req,res);
    });
    application.get('/getGoals',function(req,res){
        var connection = application.config.dbConnection();
        var goalsModel = new application.app.models.GoalsDAO(connection);
        
        goalsModel.getGoals(function(error,result){
            res.send(result);  
          });  
    });
}