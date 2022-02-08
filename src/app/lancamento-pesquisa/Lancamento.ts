export interface Lancamento {
  id: number;
  descricao: string;
  data_vencimento: Date;
  data_pagamento: Date;
  valor: number;
  observacao: string;
  tipo: string;
  categoria: number;
  pessoa: number;
}
