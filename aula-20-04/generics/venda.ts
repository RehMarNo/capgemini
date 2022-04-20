import Item from './item'
import Produto from './produto'
import Carrinho from './carrinho'

let feijao: Produto;
feijao = new Produto('Feijão Preto', 5, 10);
let arroz = new Produto('Arroz Branco', 5, 10);
let bolo = new Produto('bolo Laranja', 4, 10);

let item1 = new Item(feijao, feijao.valorUnitario, 2);
let item2 = new Item(arroz, arroz.valorUnitario, 3);
let item3 = new Item(bolo, bolo.valorUnitario, 4);

let v1 = new Carrinho([item1, item2], '20/04/2022', 'Carlos', false);
v1.add(item3);
v1.finalize();
v1.display();