import Pessoa from './pessoa'

class PessoaJuridica extends Pessoa {
    cnpj: string;

    constructor(id: number, nome: string, contato: string, cnpj: string) {
        super(id, nome, contato);
        this.cnpj = cnpj;
    }

    salvar(): boolean {
        console.log(`Salvando...`);
        return true;
    }

    display(): string {
        return(`${super.display()} CNPJ: ${this.cnpj}`);
    }
}

let p3 = new PessoaJuridica(3, 'Bemais', 'bemais@gmail.com', '100.100.100/0001-01')
p3.salvar();
console.log(p3.display())