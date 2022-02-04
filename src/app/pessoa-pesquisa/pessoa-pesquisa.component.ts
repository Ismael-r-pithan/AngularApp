import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent  {

  pessoas = [
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: true },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: true },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false },
    {nome: 'ismael', estado: 'RS', cidade: 'rio grande', status: false }

  ]

}
