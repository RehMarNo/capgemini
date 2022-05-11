import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  listaCliente: any = []

  constructor(private clientService: ClienteService) { 
    this.getAll()
  }

  getAll(){
    this.clientService.getAll().subscribe(data => {
      this.listaCliente = data
      console.log(this.listaCliente)
    })
  }

  ngOnInit(): void {
  }

}
