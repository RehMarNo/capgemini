import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private clientService: ClienteService) { 
    this.getAll()
  }

  getAll(){
    this.clientService.getAll().subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
