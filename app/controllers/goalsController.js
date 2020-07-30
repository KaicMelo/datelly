module.exports.createGoals = function(application,req,res)
{
    var goal = req.body;

    req.assert('titulo','Titulo é obrigatório').notEmpty();

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);
    var id = 2;
    goalsModel.goalCreate(goal,id,function(error,result){
        if(error != null)
        {
            res.status(404).send('Erro ao cadastrar meta');
            return;
        } 
        res.status(201).send('Meta cadastrada com sucesso');
        return;
      });   
};

module.exports.deleteGoal = function(application,req,res)
{
    var id = req.body; 

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);
 
    goalsModel.deleteGoal(id,function(error,result){  
        if(error != null)
        {
            res.status(404).send('Erro deletar meta');
            return;
        } 
        res.status(201).send('Meta deletada com sucesso');
        return;
    });
}
 