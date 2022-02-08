import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from './lancamento-pesquisa/Lancamento';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {



  lancamentosUrl = 'http://localhost:8080/lancamentos';


  constructor(private httpClient: HttpClient) {
  }

  public list() {
    return this.httpClient.get<Lancamento[]>(this.lancamentosUrl);
  }

  public remove (id: number) {
    return this.httpClient.delete(`${this.lancamentosUrl}/${id}`);
  }

}
