
const express = require('express');
const app = express();
const clientes = require('./dbClientes')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DELETAR
app.delete('/clientes/:idCliente', (req, res) => {
    let idCliente = req.params.idCliente
    let posicao = 0
    for (let c of clientes) {
        if (c.id == idCliente) {
            break;
        }
        posicao++;
    }
    clientes.splice(posicao, 1)
    res.status(204).send();
})

// CADASTRO
app.post('/clientes', (req, res) => {
    let newCliente = {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email,
        limiteCredito: req.body.limiteCredito
    }
    clientes.push(newCliente)
    res.status(202).send(newCliente)

})

// CONSULTA 
app.get('/clientes', (req, res) => {
    res.status(200).send(clientes)
})

// CONSULTA ID
app.get('/clientes/:idCliente', (req, res) => {
    let idCliente = req.params.idCliente
    var cliente = {}
    clientes.forEach(c => {
        if (c.id == idCliente) {
            cliente = c
        }
    })
    res.status(200).send(cliente)
})

// EDITAR
app.patch('/clientes/:idCliente', (req, res) => {
    let idCliente = req.params.idCliente
    let cliente = {}
    clientes.forEach(c => {
        if (c.id == idCliente) {
            c.nome = req.body.nome,
            c.fone = req.body.fone,
            c.email = req.body.email,
            c.limiteCredito = req.body.limiteCredito
            cliente = c
        }
    })
    res.status(202).send(cliente)
})

app.listen(8080, () => { console.log('listening on port 8080') });