export interface Subsidiarias {
    id: string;
    name: string;
    cnpj: string;
    employeesCount: number;
    phone: string;
}

export interface CriarSubsidiaria {
    nome: string;
    cnpj: string;
}

export interface DetalhesSubsidiaria {
    name: string;
    cnpj: string;
    openingDate: string;
    city: string;
}

export interface AtualizarSubsidiaria {
    nome: string;
    cnpj: string;
}
