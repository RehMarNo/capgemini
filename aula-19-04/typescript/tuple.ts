var boletim: [string, number, number];
boletim = ['Ana', 9.0, 75];
console.log(boletim);

var estoque: [string, number] = ['Arroz', 10];
console.log(estoque);

/* criar array de tuplas */
var participantes:[string, number][] = [];

participantes.push(['Jose', 18])
participantes.push(['Maria', 20])
participantes.push(['Ana', 21])

console.log(participantes)

var contato: {
    id: number,
    nome: string
}

contato = {id: 0, nome: 'Maria'}