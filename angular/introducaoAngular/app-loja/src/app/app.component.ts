import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-loja';

  userConected: any = {};

  pegarPerfilUserLogon() {
    let user = localStorage.getItem('userLogon')
    if(user != null) {
      user = JSON.parse(user)
      this.userConected = user
    }
  }

  logout() {
    localStorage.removeItem('userLogon')
    window.location.reload()
  }

  constructor() {
    this.pegarPerfilUserLogon()
  }
}
