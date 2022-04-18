class Pessoa{
    constructor(nome, contato){
        this.nome = nome;
        this.contato = contato;
    }

    display(){
        console.log(this.nome + " " + this.contato)
    }
}

let p1 = new Pessoa("Maria", "maria@gmail.com");

p1.display();

class PessoaFisica extends Pessoa {
    constructor(nome, contato, cpf){
        super(nome, contato);
        this.cpf = cpf;
    }

    show() {
        console.log(this.cpf + " " + this.nome + " " + this.contato);
    }
}

let p2 = new PessoaFisica("Jose", "jose@gmail.com", "1234567890");
p2.show();

p2.display()