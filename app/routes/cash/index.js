module.exports = function (application) {
    application.get('/cash', function (req, res) {
        application.app.controllers.cashController.cash(application, req, res);
    });
}