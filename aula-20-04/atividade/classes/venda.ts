import { IDao } from "../../interfarces/interfaces"

class Venda implements IDao {
    data: string;
    cliente: string;

    constructor(data: string, cliente: string) {
        this.data = data;
        this.cliente = cliente;
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
}

let v1: Venda
v1 = new Venda('20/04/2022', 'Maria');