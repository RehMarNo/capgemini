"use strict";
const urlProduto = 'http://localhost:3000/produtos';
const urlItem = 'http://localhost:3000/itens';
const urlCarrinho = 'http://localhost:3000/carrinho';
class Produto {
    constructor(id, descricao, preco, estoque) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
}
class ModelProduto {
    salvar(obj) {
        fetch(urlProduto, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    alterar(obj) {
        fetch(`${urlProduto}/${obj.id}`, {
            method: 'PACTH',
            body: JSON.stringify({
                "descricao": obj.descricao,
                "preco": obj.preco,
                "estoque": obj.estoque
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display) {
        fetch(urlProduto)
            .then(x => x.json())
            .then(data => display(data));
    }
    consultarPorId(id, display) {
        var x = { id: 0, descricao: "", preco: 0, estoque: 0 };
        fetch(`${urlProduto}/${id}`)
            .then(x => x.json())
            .then(data => {
            display(data);
        });
    }
}
/**Controller item */
class Item {
    constructor(produto, precoItem, qtde) {
        this.produto = produto;
        this.precoItem = precoItem;
        this.qtde = qtde;
    }
}
/**Modelo Item */
class ModelItem {
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, display) {
        throw new Error("Method not implemented.");
    }
    salvar(it) {
        fetch(urlItem, {
            method: 'POST',
            body: JSON.stringify(it),
            headers: {
                'Content-type': 'Application/json'
            }
        })
            .then(x => x.json())
            .then(data => console.log(data));
    }
}
/**Carrinho de compras */
class Carrinho {
    constructor(data, cliente) {
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = false;
    }
    add(it) {
        this.itens.push(it);
    }
}
class ModelCarrinho {
    salvar(obj) {
        fetch(urlCarrinho, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'Application/json'
            }
        });
    }
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display) {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id, display) {
        throw new Error("Method not implemented.");
    }
}
