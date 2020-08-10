
var crypto = require("crypto");

function UsersDAO(connection) 
{
    this._connection = connection;
}
UsersDAO.prototype.authenticate = function(user,result){
    var password = crypto.createHash("md5").update(user.password).digest('hex');
    // console.log(password);
    // return;
    this._connection.query(
        "SELECT * FROM rk_users WHERE login = '"+user.login+"' AND password ='"+password+"'",result);
}

module.exports = function(){     
    return UsersDAO;
}