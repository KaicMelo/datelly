module.exports = function(application){
    application.get('/getGoals',function(req,res){
        var connection = application.config.dbConnection();
        var goalsModel = new application.app.models.GoalsDAO(connection);
        
        var id = req.session.aut_id;
        goalsModel.getGoals(id,function(error,result){
            res.send({data:result});  
          }); 
    }); 

    application.get('/goals',function(req,res){
        application.app.controllers.goalsController.goals(application,req,res);
    });

    application.post('/updateGoals',function(req,res){
        application.app.controllers.goalsController.updateGoals(application,req,res);
    });

    application.post('/createGoals',function(req,res){ 
        application.app.controllers.goalsController.createGoals(application,req,res);
    });

    application.post('/deleteGoal',function(req,res){ 
        application.app.controllers.goalsController.deleteGoal(application,req,res);
    });
}