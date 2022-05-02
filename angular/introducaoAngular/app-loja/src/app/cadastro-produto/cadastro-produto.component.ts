import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  msg: boolean = false;
  produtos: any = {};
  descricao: string = ''

  constructor(private serviceProduto: ProdutoService) {
    this.serviceProduto.getAll().subscribe(x => this.produtos = x)
  }

  gravar(dados: any) {
    if (dados.descricao == '' || dados.preco == '' || dados.estoque == '') {
      this.msg = false;
    } else {
      this.serviceProduto.gravar(dados).subscribe(res => {
        this.msg = true
        setInterval(() => { this.msg = false; window.location.reload() }, 3000)
      });
    }
  }

  delete(idProduto: number) {
    this.serviceProduto.delete(idProduto).subscribe(res => {window.location.reload()})
  }

  ngOnInit(): void {
  }

}
