import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-teste';
  nome: string = 'Renata'

  cliente = {
    id: 1,
    nome: 'José',
    idade: 32
  }

  trocar() {
    this.nome = 'Maria';
  }
}
