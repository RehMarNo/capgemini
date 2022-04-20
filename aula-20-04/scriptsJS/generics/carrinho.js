"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carrinho {
    constructor(itens, data, cliente, isFinalizado) {
        this.itens = itens;
        this.data = data;
        this.cliente = cliente;
        this.isFinalizado = isFinalizado;
    }
    add(item) {
        try {
            if (this.isFinalizado == true) {
                throw 'Carrinho já finalizado';
            }
        }
        catch (e) {
            console.log(e);
        }
        this.itens.push(item);
    }
    remove(item) {
        let index = 0;
        try {
            if (this.itens.length < 0) {
                throw 'Carrinho vazio';
            }
        }
        catch (e) {
            console.log(e);
        }
        this.itens.forEach(i => {
            if (i.produto == item.produto) {
                index = this.itens.indexOf(i);
                this.itens.splice(index, 1);
            }
        });
    }
    getTotal() {
        let total = 0;
        this.itens.forEach(i => {
            total += i.preco * i.qtde;
        });
        return total;
    }
    finalize() {
        this.isFinalizado = true;
    }
    display() {
        var arrayItens = new Array();
        this.itens.forEach(i => {
            arrayItens.push(i.produto.descricao);
        });
        if (this.isFinalizado == true) {
            console.log(`
            Compra Finalizada!
            Itens: ${arrayItens}
            Data: ${this.data}
            Cliente: ${this.cliente}
            R$ Total: ${this.getTotal()}
            `);
        }
    }
}
exports.default = Carrinho;
