module.exports.cash = function(application,req,res)
{
    res.render('cash/index');
    return;
    if(req.session.authorized == true)
    {
        res.render('cash/index');
        return;
    }
    res.render('login/index');
    return;
}