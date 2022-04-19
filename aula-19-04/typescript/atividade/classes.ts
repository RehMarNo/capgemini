class Pessoa{
    id: number;
    nome: string;
    fone: string;
    email: string;

    constructor(id: number, nome: string, fone: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }

    display():void {
        console.log(this)
    }
}

let ps = new Pessoa(1, 'Maria', '2345567', 'maria@gmail.com');
ps.display();