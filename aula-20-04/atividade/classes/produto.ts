import { IDao } from "../../interfarces/interfaces"

class Produto implements IDao {
    descricao: string;
    preco: number;
    qtde: number;

    constructor(descricao: string, preco: number, qtde: number) {
        this.descricao = descricao;
        this.preco = preco;
        this.qtde = qtde;
    }

    salvar(): boolean {
        return true;
    }

    alterar(objeto: string): boolean {
        return true;
    }

    consultar(): string[] {
        let x: string[] = [];
        return x;
    }

    consultarPorId(id: number): string {
        return 'maria';
    }

    excluir(id: number): void {
        // 
    }

    totalItems(): number {
        return this.qtde*this.preco;
    }

    valorDesconto(taxa: number): number {
        return this.preco*(taxa/100)
    }
}