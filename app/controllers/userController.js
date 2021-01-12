module.exports.index = function (application, req, res) {
    if (req.session.authorized == true) {
        res.render('user/index');
        return;
    }
    res.render('login/index');
    return;
}
module.exports.MyUser = function (application, req, res) {
    var connection = application.config.dbConnection();
    var usersModel = new application.app.models.UsersDAO(connection);
    var id = req.session.aut_id;

    usersModel.getMyUser(id, function (error, result) {

        if (result.length > 0) {
            res.send({
                data: result,
                token: req.session.token_id
            });
            return;
        }
        res.status(404).send('Error');
        return;
    });
}

module.exports.userUpdate = function (application, req, res) {
    var data = req.body;
    var id = req.params.id;

    var connection = application.config.dbConnection();
    var usersModel = new application.app.models.UsersDAO(connection);
    var notificationModel = new application.app.models.NotificationDAO(connection);
    var session_id = req.session.aut_id;

    usersModel.getToken(data.rk_girlfriend_id, function (error, userResult) {

        if (userResult.length > 0 && data.rk_girlfriend_id.length > 8) {

            data.rk_girlfriend_id = userResult[0].id;
            usersModel.userUpdate(data, id, function (error, result) {

                if (result.affectedRows == 1) {

                    notificationModel.getNotification(data.id, data.rk_girlfriend_id, function (hasNotificationError, hasNotificationResult) {
                        if (hasNotificationResult.length == 0) {
                            notificationModel.insertNotification(data.id, data.rk_girlfriend_id, function (notificationError, notificationResult) {
                            });
                        }
                    });
                    res.status(200).send({ data: result });
                } else {
                    res.status(404).send('Error');
                }
            });
        } else {
            data.rk_girlfriend_id = '';
            usersModel.userUpdate(data, id, function (error, result) {
                if (result.length > 0) {
                    res.status(200).send({ data: result });
                    return;
                }
                res.status(404).send('Error');
                return;
            });
        }
    });
}