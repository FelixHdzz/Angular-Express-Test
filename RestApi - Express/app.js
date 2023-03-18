// const mysql = require('mysql');
// const express = require('express');
// const  routes =  require('./routes/app.routes.js')

import express from 'express'
import routes from './routes/app.routes.js';

// var cors = require('cors');

import cors from 'cors'

const port = 3000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(routes) 
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'world'
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }
//   console.log('Conexion a base de datos lista...');
// });

// app.get('/', (req, res) => {
//   res.send('Servidor listo.')
// });

// app.get('/api/v1/person/:id', (req, res) => {
//   console.log(`Solicitud GET al servidor City para ID: ${req.params.id}.`);  

//   const userid = req.params.id;

//   const sql = `SELECT * FROM city WHERE ID = ${userid}`;

//   connection.query(sql, (err, result) => {
//     if (err) {
//       return console.error('Consulta erronea: ', err.message);
//       res.status(500).send('Error del servidor.');
//     }
//     else{
//       res.send(result);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Conectado en el puerto: ${port}`)
})
