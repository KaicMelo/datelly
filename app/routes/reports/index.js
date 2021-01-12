module.exports = function(application){
    application.get('/reports',function(req,res){
        application.app.controllers.reportsController.index(application,req,res);  
    });
}