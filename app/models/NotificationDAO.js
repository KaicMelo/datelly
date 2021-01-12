
function UsersDAO(connection) {
    this._connection = connection;
}

UsersDAO.prototype.getMyNotification = function (id, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE status = 1  and (rk_user_id = "+id+" OR rk_girlfriend_id = "+id+")", result);
}

UsersDAO.prototype.myLove = function (id, result) {

    this._connection.query(`SELECT rn.id,rk_user_id,ru.name as user_name,rn.rk_girlfriend_id,ruo.name as girlfriend_name,status 
    FROM rk_notification as rn 
    LEFT JOIN rk_users as ru ON ru.id = rn.rk_user_id
    LEFT JOIN rk_users as ruo ON ruo.id = rn.rk_girlfriend_id
    WHERE (rn.rk_user_id = "${id}" OR rn.rk_girlfriend_id = "${id}")`, result);
}

UsersDAO.prototype.insertNotification = function (myId,otherId, result) {

    this._connection.query("INSERT INTO rk_notification (rk_user_id, rk_girlfriend_id) VALUES ('"+myId+"', '"+otherId+"')", result);
}

UsersDAO.prototype.getNotification = function (myId,otherId, result) {

    this._connection.query("SELECT * FROM rk_notification WHERE rk_user_id ="+myId+" OR rk_girlfriend_id ="+myId+"", result);
}

UsersDAO.prototype.accept = function (id,status, result) {

    this._connection.query("UPDATE rk_notification SET status ="+status+" WHERE id ="+id+"", result);
}

UsersDAO.prototype.delete = function (id, result) {

    this._connection.query("DELETE FROM rk_notification WHERE id ="+id+"", result);
}

module.exports = function () {
    return UsersDAO;
}