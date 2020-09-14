
function GoalsDAO(connection) 
{
    this._connection = connection;
}
GoalsDAO.prototype.getGoals = function(callback){
    this._connection.query(
        'SELECT rg.id,ru.login as rk_user_id,rg.name,DATE_FORMAT(rg.concluded,"%Y-%m-%d") as concluded,rg.obs,DATE_FORMAT(rg.created_at,"%Y-%m-%d") as created_at FROM rk_goals rg JOIN rk_users ru ON ru.id = rg.rk_user_id WHERE status = 1',callback);
}

GoalsDAO.prototype.goalCreate = function(goal,id,callback){ 
    this._connection.query("INSERT INTO rk_goals (rk_user_id,name) VALUES ("+id+",'"+goal.name+"')",callback); 
}

GoalsDAO.prototype.goalUpdate = function(goal,callback){
    if(goal.concluded == '')
    {
        this._connection.query("UPDATE rk_goals SET obs ='"+goal.obs+"' , concluded=NULL WHERE id ="+goal.id,callback); 
    }else{
        this._connection.query("UPDATE rk_goals SET obs ='"+goal.obs+"' , concluded='"+goal.concluded+"' WHERE id ="+goal.id,callback); 
    }
}

GoalsDAO.prototype.deleteGoal = function(id,callback){
    // this._connection.query("DELETE FROM rk_goals WHERE id ="+id.id,callback); 
    this._connection.query("UPDATE rk_goals SET status = 0 WHERE id ="+id.id,callback); 
}

module.exports = function(){     
    return GoalsDAO; 
}