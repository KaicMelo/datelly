module.exports.index = function (application, req, res) {
    res.render('account/index');
};

module.exports.create = function (application, req, res) {
    var register = req.body;

    var connection = application.config.dbConnection();
    var accountModel = new application.app.models.AccountDAO(connection);
    var id = req.session.aut_id;
    var userLove = [];

    var name = register.name.split(' ');
    if (name.length > 1) {
        register.token_id = name[0] + name[1] + '#' + Math.random().toString(36).substring(7);
    } else {
        register.token_id = name[0] + '#' + Math.random().toString(36).substring(7);
    }

    if (register.rk_girlfriend_id.length > 8) {
        var usersModel = new application.app.models.UsersDAO(connection);

        usersModel.getToken(register.rk_girlfriend_id, function (UserError, userResult) {

            if (userResult.length > 0) {

                register.rk_girlfriend_id = userResult[0].id;

                accountModel.accountCreate(register, id, function (error, result) {
                    if (error != null) {
                        res.status(404).send('Erro ao cadastrar meta');
                        return;
                    }
                    res.status(201).send('Meta cadastrada com sucesso');
                    return;
                });
            }
        });
        return;
    }
    register.rk_girlfriend_id = '';

    accountModel.accountCreate(register, id, function (error, result) {
        if (error != null) {
            res.status(404).send('Erro ao cadastrar meta');
            return;
        }
        res.status(201).send('Meta cadastrada com sucesso');
        return;
    });
};

module.exports.updateGoals = function (application, req, res) {
    var goal = req.body;

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);

    goalsModel.goalUpdate(goal, function (error, result) {
        if (error != null) {
            res.status(404).send('Erro ao atualizar meta');
            return;
        }
        res.status(200).send('Meta atualizada com sucesso');
        return;
    });
};

module.exports.deleteGoal = function (application, req, res) {
    var id = req.body;

    var connection = application.config.dbConnection();
    var goalsModel = new application.app.models.GoalsDAO(connection);

    goalsModel.deleteGoal(id, function (error, result) {
        if (error != null) {
            res.status(404).send('Erro deletar meta');
            return;
        }
        res.status(201).send('Meta deletada com sucesso');
        return;
    });
}
module.exports.goals = function (application, req, res) {
    if (req.session.authorized == true) {
        res.render('home/index');
        return;
    }
    res.json({ message: "Você não tem permissão" });
    return;
}
