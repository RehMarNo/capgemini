import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private serviceUsuario: UsuarioService) { }

  msg: boolean = false;
  save(data: any) {
    data = {...data, perfil: 'USER'}
    if(data.nome == '' || data.email == '' || data.password == '') {
      this.msg = false;
    } else {
      this.serviceUsuario.save(data).subscribe(x => {
        this.msg = true
        setInterval(() => { this.msg = false; window.location.reload() },3000)
      })
    }
    
  }

  ngOnInit(): void {
  }

}
