
function UsersDAO(connection) 
{
    this._connection = connection;
}
UsersDAO.prototype.authenticate = function(user,result){
    this._connection.query(
        "SELECT * FROM rk_users WHERE login = '"+user.login+"' AND password ='"+user.password+"'",result);
}

module.exports = function(){     
    return UsersDAO;
}