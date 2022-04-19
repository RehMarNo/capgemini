
class Produtos {
    descricao: string;
    preco: number;
    qtde: number;

    constructor(descricao: string, preco: number, qtde: number) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }

    totalItems(): number {
        return this.qtde*this.preco;
    }

    valorDesconto(taxa: number): number {
        return this.preco*(taxa/100)
    }

    display(taxa: number): void {
        console.log(`
            Descrição......: ${this.descricao}
            Preço..........: ${this.preco}
            Quantidade.....: ${this.qtde}
            Subtotal.......: ${this.totalItems()}
            R$ desc p/ item: ${this.valorDesconto(taxa)}
            R$ pago........: ${this.preco*this.qtde - this.valorDesconto(taxa)*this.qtde}
        `)
    }
}

let pd = new Produtos('Arroz', 5.06, 10);
pd.display(10)