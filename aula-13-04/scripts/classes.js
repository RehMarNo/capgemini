
var urlContatos = "http://localhost:3000/contatos"

class Contato {
    constructor(id,  nome, fone, email){
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }

    salvar() {
        fetch(urlContatos, 
                {
                    method: "POST",
                    body: JSON.stringify(this),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .catch(erro => console.log(erro))
        
    }    
}
