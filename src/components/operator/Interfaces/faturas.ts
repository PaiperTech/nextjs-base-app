export interface Faturas {
    id: string;
    status: string;
    subsidiaryName: string;
    date: Date;
    totalValue: number;
    type: string;
  }
  
  export interface detalhesFatura {
    subsidiaryName: string;
    partnerName: string;
    createdAt: Date;
    totalValue: number;
    valueByEmployee: number;
  }
  
  export interface Parcelas {
    contrato: string;
    nome: string;
    cpf: string;
    parcela: number;
    valor: number;
  }