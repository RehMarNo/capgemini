function onSubmit() {
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let email = document.getElementById("email");
    let data = document.getElementById("data");
    let hora = document.getElementById("hora");
    let senha = document.getElementById("senha");
    let textarea = document.getElementById("textarea");
    let num = document.getElementById("selectNum");

    /* let cadastro = {
        nome: document.getElementById("nome"),
        idade = document.getElementById("idade"),
        email = document.getElementById("email"),
        data = document.getElementById("data"),
        hora = document.getElementById("hora"),
        senha = document.getElementById("senha"),
        textarea = document.getElementById("textarea")

    } */

    if (nome.value === "") {
        alert("Informe nome");
        nome.focus();
        return;
    }
    if (idade.value === "") {
        alert("Informe idade");
        idade.focus();
        return;
    }
    if (email.value === "") {
        alert("Informe email");
        email.focus();
        return;
    }
    if (data.value === "") {
        alert("Informe data");
        data.focus();
        return;
    }
    if (hora.value === "") {
        alert("Informe hora");
        hora.focus();
        return;
    }
    if (senha.value === "") {
        alert("Informe senha");
        senha.focus();
        return;
    }
    if (textarea.value === "") {
        alert("Informe comentario");
        textarea.focus();
        return;
    }
    if (num.value === "") {
        alert("Escolha um numero");
        num.focus();
        return;
    }

    document.getElementsByTagName("form")[0].submit();
}