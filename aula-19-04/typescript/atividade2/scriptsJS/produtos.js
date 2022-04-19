"use strict";
class Produtos {
    constructor(descricao, preco, qtde) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }
    totalItems() {
        return this.qtde * this.preco;
    }
    valorDesconto(taxa) {
        return this.preco * (taxa / 100);
    }
    display(taxa) {
        console.log(`
            Descrição......: ${this.descricao}
            Preço..........: ${this.preco}
            Quantidade.....: ${this.qtde}
            Subtotal.......: ${this.totalItems()}
            R$ desc p/ item: ${this.valorDesconto(taxa)}
            R$ pago........: ${this.preco * this.qtde - this.valorDesconto(taxa) * this.qtde}
        `);
    }
}
let pd = new Produtos('Arroz', 5.06, 10);
pd.display(10);
