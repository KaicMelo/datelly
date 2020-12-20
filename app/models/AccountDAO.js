var crypto = require("crypto");

function GoalsDAO(connection) 
{
    this._connection = connection;
}

GoalsDAO.prototype.accountCreate = function(user,id,callback){
    const password = crypto.createHash("md5").update(user.password).digest('hex');
    
    this._connection.query("INSERT INTO rk_users (rk_girlfriend_id,token_id,name,email,login,password) VALUES ('"+user.rk_girlfriend_id+"','"+user.token_id+"','"+user.name+"','"+user.email+"','"+user.login+"','"+password+"')",callback); 
}

module.exports = function(){     
    return GoalsDAO; 
}