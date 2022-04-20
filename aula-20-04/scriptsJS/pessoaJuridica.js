"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaJuridica extends pessoa_1.default {
    constructor(id, nome, contato, cnpj) {
        super(id, nome, contato);
        this.cnpj = cnpj;
    }
    salvar() {
        console.log(`Salvando...`);
        return true;
    }
    display() {
        return (`${super.display()} CNPJ: ${this.cnpj}`);
    }
}
let p3 = new PessoaJuridica(3, 'Bemais', 'bemais@gmail.com', '100.100.100/0001-01');
p3.salvar();
console.log(p3.display());
