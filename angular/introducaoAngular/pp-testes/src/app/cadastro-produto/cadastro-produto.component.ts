import { Component, OnInit } from '@angular/core';
import IProduto from 'src/interfaces';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor() { }
  descricao:  string =  ''

  frase: string = 'ola mundo'

  produto: IProduto = {
    id: 1,
    descricao: 'Arroz',
    preco:'6.89',
    estoque: 12
  }

  hoje = new Date()

  ngOnInit(): void {
  }

}
