import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  {

  lancamentos = [
    {
      tipo: "DESPESA", descricao: 'Compras', dataVencimento: '30/06/2017', dataPagamento: '30/07/2017', valor: 4.55, pessoa: 'Padaria do José'
    },
    {
      tipo: "RECEITA", descricao: 'Venda de software', dataVencimento: '30/06/2017', dataPagamento: null, valor: 8000, pessoa: 'Tecno s.a'
    }
  ];

}
