
function UsersDAO(connection) {
    this._connection = connection;
}
UsersDAO.prototype.getMyNotification = function (id, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE rk_user_id = "+id+" OR rk_girlfriend_id = "+id+" AND status = 1", result);
}

module.exports = function () {
    return UsersDAO;
}