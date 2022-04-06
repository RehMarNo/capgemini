function loadCategoria(){
    fetch("http://localhost:3000/categorias")
    .then(x => x.text())
    .then(categorias => display(categorias))
}

function display(categorias) {
    let concatOptions = ''
    let cat = JSON.parse(categorias)

    cat.forEach(e => {
        concatOptions += `<option value = ${e.id}>${e.nome}</option>`
    });

    document.getElementById('selectCategoria').innerHTML = concatOptions
}