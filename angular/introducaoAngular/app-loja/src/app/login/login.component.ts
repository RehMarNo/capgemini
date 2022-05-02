import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }

  users: any = []

  userLogon = {
    id: 0,
    nome:"",
    email: "",
    perfil: "",
    password: ""
  }

  getUser(dados: any) {
    this.serviceUsuario.getAll().subscribe(res => {
      this.users = res
      this.isVerify(dados.password, dados.email, this.users)
    })
  }

  isVerify(password: string, email: string, users: any) {
    localStorage.removeItem("userLogon")
    for(let i = 0; i < users.length; i++) {
      if(users[i].email == email && users[i].password == password) {
        this.userLogon.id = users[i].id
        this.userLogon.nome = users[i].nome
        this.userLogon.email = users[i].email
        this.userLogon.password = users[i].password
        this.userLogon.perfil = users[i].perfil
        this.gravarDadosLocalStorage()
      }
    }
    window.location.reload()
  }

  gravarDadosLocalStorage() {
    localStorage.setItem("userLogon", JSON.stringify(this.userLogon))
  }
  

  ngOnInit(): void {
  }

}
