import Item from './item'

class Carrinho {
    itens: Item[];
    data: string;
    cliente: string;
    isFinalizado: boolean;

    constructor(itens: Item[], data: string, cliente: string, isFinalizado: boolean) {
        this.itens = itens;
        this.data = data;
        this.cliente = cliente;
        this.isFinalizado = isFinalizado;
    }

    add(item: Item): void {
        try {
            if(this.isFinalizado == true){
                throw 'Carrinho já finalizado'
            }
        } catch (e) {
            console.log(e)
        }
        this.itens.push(item);
    }

    remove(item: Item): void {
        let index = 0
        try { 
            if(this.itens.length < 0){
                throw 'Carrinho vazio'
            }
        } catch (e) {
            console.log(e)
        }
        this.itens.forEach(i => {
            if(i.produto == item.produto) {
                index = this.itens.indexOf(i);
                this.itens.splice(index, 1)
            }
        })
    }

    getTotal(): number {
        let total = 0
        this.itens.forEach(i => {
           total+= i.preco*i.qtde 
        })

        return total;
    }

    finalize(): void {
        this.isFinalizado = true;
    }

    display(): void {
        var arrayItens = new Array();

        this.itens.forEach(i => {
            arrayItens.push(i.produto.descricao)
        })
        if(this.isFinalizado == true) {
            console.log(`
            Compra Finalizada!
            Itens: ${arrayItens}
            Data: ${this.data}
            Cliente: ${this.cliente}
            R$ Total: ${this.getTotal()}
            `)
        }
    }
}

export default Carrinho;