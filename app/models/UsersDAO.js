
var crypto = require("crypto");

function UsersDAO(connection) {
    this._connection = connection;
}
UsersDAO.prototype.authenticate = function (user, result) {
    var password = crypto.createHash("md5").update(user.password).digest('hex');

    this._connection.query(
        "SELECT * FROM rk_users WHERE login = '" + user.login + "' AND password ='" + password + "'", result);
}

UsersDAO.prototype.getMyUser = function (id, result) {
    this._connection.query(
        "SELECT mrk.id, ork.token_id as rk_girlfriend_id,mrk.token_id,mrk.name,mrk.email,mrk.login FROM rk_users mrk LEFT JOIN rk_users ork ON ork.id = mrk.rk_girlfriend_id WHERE mrk.id ="+id,result);
}

UsersDAO.prototype.getToken = function (token, result) {
    this._connection.query(
        "SELECT * FROM rk_users WHERE token_id ='" + token + "'", result);
}

UsersDAO.prototype.userUpdate = function (data, id, result) {
    if (data.password == '') {
        this._connection.query(
            "UPDATE rk_users SET rk_girlfriend_id ='" + data.rk_girlfriend_id + "',name='" + data.name + "',login='" + data.login + "',email='" + data.email + "' WHERE id =" + id + "", result);
    } else {
        var password = crypto.createHash("md5").update(data.password).digest('hex');

        this._connection.query(
            "UPDATE rk_users SET rk_girlfriend_id ='" + data.rk_girlfriend_id + "',name='" + data.name + "',login='" + data.login + "',email='" + data.email + "',password='" + password + "' WHERE id =" + id + "", result);
    }
}
UsersDAO.prototype.updateGirlfriend = function (user, girlfiend, result) {
  
    this._connection.query(
        "UPDATE rk_users SET rk_girlfriend_id ='" +user + "' WHERE id =" + girlfiend + "", result);
    
}

UsersDAO.prototype.deleteGirlfriend = function (user, girlfiend, result) {
  
    this._connection.query(
        "UPDATE rk_users SET rk_girlfriend_id = NULL WHERE id =" + user + " OR id ="+girlfiend+"", result);
}

module.exports = function () {
    return UsersDAO;
}