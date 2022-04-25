const urlProduto = 'http://localhost:3000/produtos'
const urlItem = 'http://localhost:3000/itens'
const urlCarrinho = 'http://localhost:3000/carrinho'

interface IDao<T>{
    salvar(obj: T):void;
    alterar(obj: T): void;
    excluir(id: number): void;
    consultarTodos(display:(x:T[]) => {}): void;
    consultarPorId(id:number, display: (x:T) => {}): void;
} 

class Produto {
    id: number;
    descricao: string;
    preco: number;
    estoque: number;
    constructor(id:number, descricao: string, preco: number, estoque: number){
       this.id = id
       this.descricao = descricao
       this.preco = preco
       this.estoque = estoque
    }    
}

class ModelProduto implements IDao<Produto>{
    salvar(obj: Produto): void {
        fetch(urlProduto, 
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    alterar(obj: Produto): void {
        fetch(`${urlProduto}/${obj.id}`, 
        {
            method: 'PACTH',
            body: JSON.stringify({
                "descricao": obj.descricao,
                "preco": obj.preco,
                "estoque": obj.estoque
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display: (lista: Produto[]) => {}): void {
        fetch(urlProduto)
        .then(x => x.json())
        .then(data => display(data))
        
    }
    consultarPorId(id: number, display:(p:Produto)=>{}) {
        var x: Produto = {id:0, descricao: "", preco: 0, estoque: 0}
        fetch(`${urlProduto}/${id}`)
        .then(x => x.json())
        .then(data => {
            display(data)
        })
    }
}

/**Controller item */
class Item {
    produto: Produto
    precoItem: number
    qtde: number
    constructor(produto: Produto, precoItem: number, qtde: number) {
        this.produto = produto
        this.precoItem = precoItem
        this.qtde = qtde
    }
}

/**Modelo Item */
class ModelItem implements IDao<Item> {
    alterar(obj: Item): void {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display: (x: Item[]) => {}): void {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number, display: (x: Item) => {}): void {
        throw new Error("Method not implemented.");
    }
    salvar(it: Item): void {
        fetch(urlItem,
            {
                method: 'POST',
                body: JSON.stringify(it),
                headers: {
                    'Content-type': 'Application/json'
                }
            }
        )
        .then(x => x.json())
        .then(data => console.log(data))
    }
}

/**Carrinho de compras */
class Carrinho{
   itens: Item[]
   data: string
   cliente: string
   finalizado: boolean 
   constructor(data: string,cliente: string){
       this.itens = []
       this.data = data;
       this.cliente = cliente
       this.finalizado = false
   }

   add(it: Item){
       this.itens.push(it)
   }

}
class ModelCarrinho implements IDao<Carrinho> {
    salvar(obj: Carrinho): void {
        fetch(urlCarrinho,
            {
                method: 'POST',
                body: JSON.stringify(obj),
                headers:{
                    'Content-type':'Application/json'
                }
            }
        )
    }
    alterar(obj: Carrinho): void {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarTodos(display: (x: Carrinho[]) => {}): void {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number, display: (x: Carrinho) => {}): void {
        throw new Error("Method not implemented.");
    }
    
}