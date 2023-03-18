

// const Router = require('express')

// const connection = require('../connection/bd.js')

import {Router} from 'express'

import connection from '../connection/bd.js';

const routes = Router()

routes.all('/', (req, res) => {
    res.send('Servidor listo.')
  });


routes.get('/api/v1/person/:id', (req, res) => {
    console.log(`Solicitud GET al servidor City para ID: ${req.params.id}.`);  
  
    const userid = req.params.id;
  
    const sql = `SELECT * FROM city WHERE ID = ${userid}`;
  
    connection.query(sql, (err, result) => {
      if (err) {
        return console.error('Consulta erronea: ', err.message);
        res.status(500).send('Error del servidor.');
      }
      else{
        res.send(result);
      }
    });
  });

  routes.all((req, res) => {
    res.status(404).json({error: "no existe wazaaa"})
  });

routes.post('/postXD', (req, res) => {
    console.log('agregando');
    const {lote, articulo, precio} = req.body;
    const [rows] = connection.query('INSERT INTO productos (lote, articulo, precio) VALUES (?,?,?)', [lote, articulo, precio],
    (err, rows) => {
        if(rows.affectedRows > 0){
            res.send(rows[0]);
        }
    })
})

// module.exports = routes;

export default routes;