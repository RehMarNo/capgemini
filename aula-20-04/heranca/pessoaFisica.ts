import Pessoa from './pessoa'

class PessoaFisica extends Pessoa {
    cpf: string;

    constructor(id: number, nome: string, contato: string, cpf: string) {
        super(id, nome, contato);
        this.cpf = cpf;
    }

    salvar(): boolean {
        console.log(`Salvando...`);
        return true;
    }

    display(): string {
        return(`${super.display()} CPF: ${this.cpf}`);
    }
}

export default PessoaFisica;