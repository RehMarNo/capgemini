"use strict";
class Pessoa {
    constructor(id, nome, fone, email) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    display() {
        console.log(this);
    }
}
let ps = new Pessoa(1, 'Maria', '2345567', 'maria@gmail.com');
ps.display();
