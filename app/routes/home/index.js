module.exports = function (application) { 
    application.get('/home', function (req, res) {
        application.app.controllers.homeController.home(application, req, res);
    });
}