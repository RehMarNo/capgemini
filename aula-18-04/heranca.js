
var patternEmail =  /^[a-zA-Z0-9+_-.]+@[a-zA-Z0-9]+\.[a-zA-Z](+\.[a-zA-Z])?/;
class Pessoa{
    constructor(nome, contato){
        this.nome = nome;
        this._contato = contato;
    }

    get contato(){return this._contato;}

    set contato(value){
        if (patternEmail.test(value)) {
            this._contato = value
            return true;
            
        } else {
            return console.log("email invalido");
        }
    }

    display(){
        console.log(this.nome + " " + this._contato)
    }
}

let p1 = new Pessoa("Maria", "mariagmail.com");
p1.contato = 'mariagmail.com'
p1.display();

var pattern = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/;
class PessoaFisica extends Pessoa {
    
    constructor(nome, contato, cpf){
        super(nome, contato);
        this._cpf = cpf;
    }

    get cpf(){return this._cpf}

    set cpf(value){
        if (pattern.test(value)) {
            this._cpf = value
            return true;
            
        } else {
            return console.log("cpf invalido");
        }
        
    }

    show() {
        console.log(this._cpf + " " + this.nome + " " + this.contato);
    }

}

let p2 = new PessoaFisica("Jose", "jose@gmail.com", "1234567890");
p2.show();

p2.display()

p2.cpf = '123.456.789-01'

console.log(p2.cpf)