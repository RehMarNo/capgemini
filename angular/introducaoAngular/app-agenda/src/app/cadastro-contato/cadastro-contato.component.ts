import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

  contatos = [{
    id: 1,
    nome: 'Ana',
    email: 'ana@gmail.com',
    fone: '2345-5677'
  },
  {
    id: 2,
    nome: 'Pedro',
    email: 'pedro@gmail.com',
    fone: '2345-5677'
  },
  {
    id: 3,
    nome: 'Maria',
    email: 'maria@gmail.com',
    fone: '2345-5677'
  },
  {
    id: 4,
    nome: 'Antonia',
    email: 'antonia@gmail.com',
    fone: '2345-5677'
  }]

  saveContato(data: any) {
    //console.log(data);
    data.id = this.contatos.length+1
    this.contatos.push(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
