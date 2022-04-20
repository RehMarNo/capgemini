"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaFisica extends pessoa_1.default {
    constructor(id, nome, contato, cpf) {
        super(id, nome, contato);
        this.cpf = cpf;
    }
    salvar() {
        console.log(`Salvando...`);
        return true;
    }
    display() {
        return (`${super.display()} CPF: ${this.cpf}`);
    }
}
exports.default = PessoaFisica;
