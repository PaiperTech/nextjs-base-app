// todas as interfaces do hook

import { ReactNode } from 'react';

export interface IOperator {
  id: string;
  name: string;
}

export interface IOperatorContext {
  operators: IOperator[];
  // eslint-disable-next-line no-unused-vars
  deleteOperator: (id: string) => Promise<void>;
}

export interface IOperatorProviderProps {
  children: ReactNode;
}
