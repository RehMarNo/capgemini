import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdmService } from './auth-adm.service';
import { AuthguardService } from './authguard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RelatorioVendasComponent } from './relatorio-vendas/relatorio-vendas.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [AuthguardService]
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'relatorio',
    component: RelatorioVendasComponent,
    canActivate: [AuthAdmService]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
