const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Page Produtos');
});

router.post('/', (req, res) => {
    res.status(201).send('Produto Created');
})

router.get('/:idProduto', (req, res) => {
    let  idProduto = req.params.idProduto;
    res.status(200).send(`Produto Found ${idProduto}`);
})

module.exports = router;