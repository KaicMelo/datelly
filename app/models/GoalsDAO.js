
function GoalsDAO(connection) 
{
    this._connection = connection;
}
GoalsDAO.prototype.getGoals = function(callback){
    this._connection.query(
        'SELECT rg.id,ru.login as rk_user_id,rg.name,rg.concluded,rg.obs,rg.created_at FROM rk_goals rg JOIN rk_users ru ON ru.id = rg.rk_user_id',callback);
}

GoalsDAO.prototype.goalCreate = function(goal,id,callback){ 
    this._connection.query("INSERT INTO rk_goals (rk_user_id,name) VALUES ("+id+",'"+goal.name+"')",callback); 
}

GoalsDAO.prototype.deleteGoal = function(id,callback){
    this._connection.query("DELETE FROM rk_goals WHERE id ="+id.id,callback); 
}

module.exports = function(){     
    return GoalsDAO; 
}