module.exports.createGoals = function(application,req,res)
{
    var goal = req.body;

    req.assert('titulo','Titulo é obrigatório').notEmpty();

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);
 
    goalsModel.goalCreate(goal,function(error,result){
    
        if(error != null)
        {
            res.status(404).send('Erro ao cadastrar meta');
            return;
        } 
        res.status(201).send('Meta cadastrada com sucesso');
        return;
      });   
} 
 