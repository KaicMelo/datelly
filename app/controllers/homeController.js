module.exports.home = function(application,req,res)
{
    res.render('home/index');
    return;
    if(req.session.authorized == true)
    {
        res.render('home/index');
        return;
    }
    res.render('login/index');
    return;
}
 