import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';

  lancamentos = [
    {
      tipo: "DESPESA", descricao: 'Compras', dataVencimento: '30/06/2017', dataPagamento: '30/07/2017', valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: "RECEITA", descricao: 'Venda de software', dataVencimento: '30/06/2017', dataPagamento: null, valor: 8000, pessoa: 'Tecno s.a'
    }
  ];
}
