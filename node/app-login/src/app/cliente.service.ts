import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get('https://app-ms-clientes.herokuapp.com/clientes')
  }

}
