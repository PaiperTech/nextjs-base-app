// todas as interfaces do hook

import { ReactNode } from 'react';

export interface IOperator {
  id: string;
  name: string;
}

export interface IOperatorContext {
  operators: IOperator[];
  deleteOperator: (id: string) => Promise<void>;
}

export interface IOperatorProviderProps {
  children: ReactNode;
}
