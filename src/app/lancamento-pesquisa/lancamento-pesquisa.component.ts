import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { Lancamento } from './Lancamento';


@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit  {

  ngOnInit(): void {
      this.lancamentoService.list().subscribe(dados => this.lancamentos = dados);
  }

  lancamentos:Lancamento[] = [];


  constructor(private lancamentoService: LancamentoService) {
    this.list();
  }

  public list() {
    this.lancamentoService.list().subscribe(
      (data: Lancamento[]) => {
        this.lancamentos = data;
      }, error => {
        console.log("erro");
      }
    );
  }



}
