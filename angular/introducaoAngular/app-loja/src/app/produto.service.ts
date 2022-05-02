import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  urlProduto: string = 'http://localhost:3000/produtos'
  gravar(dados: any) {
    let url = 'http://localhost:3000/produtos'
    return this.http.post(url, dados)
  }

  getAll() {
    let url = 'http://localhost:3000/produtos'
    return this.http.get(url)
  }

  getOne(idproduto: number) {
    return this.http.get(`http://localhost:3000/produtos/${idproduto}`)
  }

  update(dados: any) {
    let url = `http://localhost:3000/produtos/${dados.id}`
    return this.http.put(url,dados)
  }

  delete(idProduto: number) {
    let url = `http://localhost:3000/produtos/${idProduto}`
    return this.http.delete(url)
  }
}
