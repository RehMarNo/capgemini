"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    salvar() {
        return true;
    }
    alterar(objeto) {
        return true;
    }
    consultar() {
        let x = [];
        return x;
    }
    consultarPorId(id) {
        return 'maria';
    }
    excluir(id) {
        // 
    }
    totalItems() {
        return this.qtde * this.preco;
    }
    valorDesconto(taxa) {
        return this.preco * (taxa / 100);
    }
}
