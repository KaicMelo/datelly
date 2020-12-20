module.exports = function(application){
    application.get('/exit',function(req,res){
        req.session.authorized = false; 
        req.session.aut_id = '';
        
        res.render('login/index');
    });
}