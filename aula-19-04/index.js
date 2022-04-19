
let http = require('http');
let meuModulo = require('./modulos/funcoes')
var fs = require('fs');
var url = require('url');

function cadastro(res) {
    fs.readFile('cadastro.html', (err, data) => { 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}

function consulta(res) {
    fs.readFile('consulta.html', (err, data) => { 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}


http.createServer(function(req, res) {
    
    var adr = url.parse(req.url, true);
    if(adr.pathname == '/cadastro.html') {
        cadastro(res)
    }
    if(adr.pathname == '/consulta.html') {
        consulta(res)
    }
    console.log(adr);
    
    
}).listen(15000)

console.log("Server is up")

/* meuModulo.chamarFuncao(res) */