module.exports = function (application) {
    application.get('/getGoals', function (req, res) {
        application.app.controllers.goalsController.getGoals(application, req, res);
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