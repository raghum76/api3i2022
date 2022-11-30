var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '3307',
  password : '123456',
  database : 'prueba'
});
 
connection.connect();
 
connection.query('SELECT * from contacto',  (error, results, fields)=> {
  if (error) throw error;
  console.log(results);
});
 
connection.end();