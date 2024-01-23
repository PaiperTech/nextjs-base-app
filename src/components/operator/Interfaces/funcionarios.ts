export interface Funcionarios {
    id: string;
    status: string;
    name: string;
    cpf: string;
    subsidiaryName: string;
    installmentLimit: number;
    salary: number;
}

export interface DetalhesFuncionario {
    id: string;
    name: string;
    cpf: string;
    birthDate: Date;
    gender: string;
    salary: number;
}

export interface LicencaFuncionario {
    reason: string
    startLicense: Date;
    endLicense: Date;
    observation: string;
}

export interface DemissaoFuncionario {
    reason: string;
    discountedValue: number;
    demissionDate: Date;
}