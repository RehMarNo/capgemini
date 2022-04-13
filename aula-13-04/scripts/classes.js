
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

    consultarTodos(display) {
        fetch(urlContatos)
        .then(x => x.text())
        .then(data => display(data))
    }

    consultarPeloId(idContato, display) {
        fetch(`${urlContatos}/${idContato}`)
        .then(x => x.text())
        .then(data => display(data))
    }

    editar() {
        //PUT: atualiza todo o objeto, PATCH: atualiza apenas o que foi especificado
        fetch(`${urlContatos}/${this.id}`, 
            {
                method: "PATCH",
                body: JSON.stringify(
                    {
                        "nome": this.nome,
                        "fone": this.fone,
                        "email": this.email
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .catch(erro => console.log(erro))
    }

    excluir(idContato) {
        fetch(`${urlContatos}/${idContato}`, 
            {
                method: "DELETE"
            })
            .catch(erro => console.log(erro))
    }
}
