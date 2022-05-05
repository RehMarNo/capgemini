const express = require('express');
const app = express();
const port = 8081;

let rotasProdutos = require('./rotasProdutos');

let rotasClientes = require('./rotasClientes');


/* Invocar middleware */
app.use('/produtos', rotasProdutos);

app.use('/clientes', rotasClientes);

app.listen(port, () => {console.log('listening on port 8081')})