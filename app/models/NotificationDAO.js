
function UsersDAO(connection) {
    this._connection = connection;
}
UsersDAO.prototype.getMyNotification = function (id, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE rk_user_id = 1 OR rk_girlfriend_id = 1 AND status = 1", result);
}

module.exports = function () {
    return UsersDAO;
}