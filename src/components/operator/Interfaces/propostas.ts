export interface Propostas {
    id: string;
    status: string;
    subsidiaryName: string;
    employeeName: string;
    totalCreditValue: number;
    date: Date;
}

interface Proposal {
    id: string,
    totalCreditValue: number,
    iofValue: number,
    amountToPay: number,
    requestDate: Date,
    amountInstallments: number,
    installmentValue: number,
    date: Date
}

interface Employee {
    id: string,
    name: string,
    cpf: number,
    birthDate: Date,
    gender: string,
    salary: number
}

interface Subsidiary {
    id: string,
    name: string,
    cnpj: number,
    openingDate: Date,
    city: string
}


export interface Proposta {
    proposalDetails: Proposal;
    employeeDetails: Employee;
    subsidiaryDetails: Subsidiary;
}

export interface detalhesProposta {
    totalCreditValue: number;
    iofValue: number;
    amountToPay: number;
    requestDate: Date;
    amountInstallments: number;
    installmentValue: number;
    installmentFirstExpirationDate: Date;
}
