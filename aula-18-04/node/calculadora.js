
let http = require('http');

let fs = require('fs');
let add = require('./funcoes/funcoes');

http.createServer(function (req, res) {

    let z = add.soma(10, 20);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`${z}`);
    res.end();

    console.log("servidor rodando")
}).listen(8080)