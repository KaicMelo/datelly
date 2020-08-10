var mysql = require('mysql');

var connMySQL = function(){
//     return mysql.createConnection({
//         host: 'mysql669.umbler.com',
//         user: 'rkuser',
//         password: '#rkdatabase,
//         database: 'rkdatabase'
//     });
    return mysql.createConnection({
          host     : 'localhost', 
          user     : 'root',
          password : 'root',
          database : 'database'
    });

} 

module.exports = function(){  
  return connMySQL;
}  