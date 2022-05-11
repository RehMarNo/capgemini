import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeTokenService } from './decode-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmService implements CanActivate {

  constructor(private decodeToken: DecodeTokenService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.temUsuarioLogado()) {
      this.router.navigate(['/login'])
    }else if (!this.isAdmin()) {
      this.router.navigate(['/error'])
    }
    return true;
  }

  temUsuarioLogado(): boolean {
    let token = this.decodeToken.decodeTokenJWT()
    return token != "";
  }

  isAdmin() {
    let token = this.decodeToken.decodeTokenJWT()
    let user: any[] = []
    user.push(token)
    console.log(user[0].perfil)
    return user[0].perfil == 'ADMIN'
  }
}
