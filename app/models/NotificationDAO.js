
function UsersDAO(connection) {
    this._connection = connection;
}

UsersDAO.prototype.getMyNotification = function (id, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE status = 1  and (rk_user_id = "+id+" OR rk_girlfriend_id = "+id+")", result);
}

UsersDAO.prototype.myLove = function (id, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE (rk_user_id = "+id+" OR rk_girlfriend_id = "+id+")", result);
}

UsersDAO.prototype.insertNotification = function (myId,otherId, result) {

    this._connection.query("INSERT INTO rk_notification (rk_user_id, rk_girlfriend_id) VALUES ('"+myId+"', '"+otherId+"')", result);
}

UsersDAO.prototype.getNotification = function (myId,otherId, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE rk_user_id ="+myId+"", result);
}

module.exports = function () {
    return UsersDAO;
}