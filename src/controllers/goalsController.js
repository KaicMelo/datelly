module.exports.getGoals = function(application,req,res)
{
    if(req.session.authorized == true)
    {
        var connection = application.src.config.dbConnection();
        var goalsModel = new application.src.models.GoalsDAO(connection);

        goalsModel.getGoals(function(error,result){  
            res.json({data:result});
        });
        return;
    }
    res.json({message: "Você não tem permissão"});
    return;
}

module.exports.createGoals = function(application,req,res)
{
    var goal = req.body;

    req.assert('titulo','Titulo é obrigatório').notEmpty();

    var connection = application.src.config.dbConnection();
    var goalsModel = new application.src.models.GoalsDAO(connection);
    var id = req.session.aut_id;
    
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

module.exports.deleteGoals = function(application,req,res)
{
    var id = req.body; 

    var connection = application.src.config.dbConnection();
    var goalsModel = new application.src.models.GoalsDAO(connection);
 
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
module.exports.viewGoals = function(application,req,res)
{
    if(req.session.authorized == true)
    {
        res.render('goal/index');
        return;
    }
    res.json({message: "Você não tem permissão"});
}
