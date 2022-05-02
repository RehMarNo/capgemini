import { Component, OnInit } from '@angular/core';
import { ServiceContatoService } from '../service-contato.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatoComponent implements OnInit {

  msg: string = '';

  saveContato(data: any) {
    /* data.id = this.contatos.length+1
    this.contatos.push(data); */
    if (data.nome == '' || data.email == '' || data.fone == '') {
      this.msg = `Preencha todas as informações`
      return 
    }
    this.serviceContato.save(data).subscribe(res => this.msg = `Contato salvo com sucesso`);
  }

  constructor(private serviceContato: ServiceContatoService) { }

  ngOnInit(): void {
  }

}
