import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {

  frutas: string[] = [];
  constructor() {
    this.frutas.push('Uva');
    this.frutas.push('Morango');
    this.frutas.push('Maça');
  }

}
