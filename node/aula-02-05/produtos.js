const express = require('express');
const app = express();
const produtos = require('./dbProdutos');
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

// CONSULTA
app.get('/produtos', (req, res) => {
    res.status(200).send(produtos)
})

// CONSULTA ID
app.get('/produtos/:idProduto', (req, res) => {
    let idProduto = req.params.idProduto
    var prod = {}
    produtos.forEach(p => {
        if (p.id == idProduto) {
            prod = p
        }
    })
    res.status(200).send(prod)
})

// CADASTRO
app.post('/produtos', (req, res) => {
    let prod = {
        id: (produtos.length+2),
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque
    }
    produtos.push(prod)
    res.status(200).send(prod)
})

// EDITAR
app.patch('/produtos/:idProduto', (req, res) => {
    let idProduto = req.params.idProduto
    let prod = {}
    produtos.forEach(p => {
        if (p.id == idProduto) {
            p.descricao = req.body.descricao,
            p.preco = req.body.preco,
            p.estoque = req.body.estoque
            prod = p
        }
    })
    res.status(202).send(prod)
})

//DELETAR
app.delete('/produtos/:idProduto', (req, res) => {
    let idProduto = req.params.idProduto
    let pos = 0
    for (let p of produtos) {
        if(p.id == idProduto) {
            break;
        }
        pos++;
    }
    produtos.splice(pos, 1)
    res.status(204).send();
})

app.listen(8080, () => { console.log('listening on port 8080') });