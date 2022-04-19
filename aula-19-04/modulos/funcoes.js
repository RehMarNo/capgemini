var soma = function(n1, n2) {
    return n1+n2
}

var subtrair = (n1, n2) => { return n1-n2}

var multiplicar = function(n1, n2) {
    try{
        if(n1 == undefined || n2 == undefined) {
            throw 'Digite um valor valido'
        }
        return n1*n2
    } catch(err) {
        return err
    }
}

var dividir = function(n1, n2) {
    try{
        if(n2 == 0) {
            throw 'Valor de n2 deve ser diferente de zero'
        }
        if(n1 == undefined || n2 == undefined) {
            throw 'Digite um valor valido'
        }
        return n1/n2
    } catch(err) {
        return err
    }
}

var chamarFuncao = function(res) {
    res.write('<h2> Funcao Somar </h2>')
    res.write(`100+50 = ${soma(100, 50)}`)
    res.write('<hr>')

    res.write('<h2> Funcao Subtrair </h2>')
    res.write(`100-50 = ${subtrair(100, 50)}`)
    res.write('<hr>')

    res.write('<h2> Funcao Multiplicar </h2>')
    res.write(`100*50 = ${multiplicar(100,50)}`)
    res.write('<hr>')

    res.write('<h2> Funcao Dividir </h2>')
    res.write(`100/50 = ${dividir(100,50)}`)
    res.write('<hr>')
}

module.exports = {soma, subtrair, multiplicar, dividir, chamarFuncao}