module.exports = function(application){
    application.get('/goals',function(req,res){ 
        application.src.controllers.goalsController.getGoals(application,req,res); 
    });

    application.post('/goals',function(req,res){ 
        application.src.controllers.goalsController.createGoals(application,req,res);
    });

    application.put('/goals',function(req,res){ 
        application.src.controllers.goalsController.updateGoals(application,req,res);
    });

    application.delete('/goals',function(req,res){ 
        application.src.controllers.goalsController.deleteGoals(application,req,res);
    }); 

    application.get('/view-goals',function(req,res){ 
        application.src.controllers.goalsController.viewGoals(application,req,res); 
    });
}