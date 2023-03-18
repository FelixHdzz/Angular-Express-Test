

// const mysql = require('mysql')
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '353535',
    database: 'tienda'
  });
  
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Conexion a base de datos lista...');
  });

//   module.exports = connection;
export default connection;