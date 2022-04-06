function salvar(){
    let nome = document.getElementById('nome');
    let fone = document.getElementById('telefone');
    let email = document.getElementById('email');
    let rua = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let cep = document.getElementById('cep');
    let credito = document.getElementById('credito');


    const e = document.getElementsByClassName("input");
    for (let i = 0; i < e.length; i++) {
        if(e[i].value == ''){
            e[i].focus();
            alert('Informe '+ e[i].id)
            return;
        }
        
    }

    document.getElementById("formCliente").submit();
}

function cancelar(){
    document.getElementById("formCliente").reset();
}
