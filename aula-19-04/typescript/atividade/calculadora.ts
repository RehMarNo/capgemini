
function somar(n1: number, n2: number): any {
    try{
        if(n1 == 0 || n2 == 0){
            throw 'Digite um valor valido'
        }
        return n1+n2
    } catch(err) {
        return err
    }
}

function subtrair(n1: number, n2: number): any {
    try{
        if(n1 == 0 || n2 == 0){
            throw 'Digite um valor valido'
        }
        
        return n1-n2
    } catch(err) {
        return err
    }
}

function multiplicar(n1: number, n2: number): any {
    try{
        if(n1 == 0 || n2 == 0){
            throw 'Digite um valor valido'
        }
        return n1*n2
    } catch(err) {
        return err
    }
}

function dividir(n1: number, n2: number): any{
    try{
        if(n1 == 0){
            throw 'Digite um valor valido'
        }
        if(n2 == 0) {
            throw 'O valor de n2 deve ser diferente de zero'
        }
        return n1/n2
    } catch(err) {
        return err
    }
}