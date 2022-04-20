"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venda {
    constructor(data, cliente) {
        this.data = data;
        this.cliente = cliente;
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
}
let v1;
v1 = new Venda('20/04/2022', 'Maria');
