module.exports = function (application) {
    application.get('/getGoals', function (req, res) {
        var connection = application.config.dbConnection();
        var goalsModel = new application.app.models.GoalsDAO(connection);
        var notificationModel = new application.app.models.NotificationDAO(connection);

        var id = req.session.aut_id;

        notificationModel.getMyNotification(id, function (error, result) {
            var resp = result;
            
            if(resp.length == 0){
                goalsModel.getMyGoals(id, function (error, result) {
                    res.send({ data: result });
                });
            }else{
                var ids = [];

                for (var i in resp) {
                    val = resp[i];
                    ids.push(val.rk_girlfriend_id);
                }
                ids.push(id);

                goalsModel.getGoalsWithGirlfried(ids, function (error, result) {
                    res.send({ data: result });
                });
            }
        });
    });

    application.get('/goals', function (req, res) {
        application.app.controllers.goalsController.goals(application, req, res);
    });

    application.post('/updateGoals', function (req, res) {
        application.app.controllers.goalsController.updateGoals(application, req, res);
    });

    application.post('/createGoals', function (req, res) {
        application.app.controllers.goalsController.createGoals(application, req, res);
    });

    application.post('/deleteGoal', function (req, res) {
        application.app.controllers.goalsController.deleteGoal(application, req, res);
    });
}