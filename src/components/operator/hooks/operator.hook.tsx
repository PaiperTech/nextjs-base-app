'use client';
import { createContext, useContext, useState } from 'react';

import {
    IOperator,
    IOperatorContext,
    IOperatorProviderProps,
} from './dto/operator.dto';
import { deleteOperatorById } from '@/services/operator';

const OperatorContext = createContext<IOperatorContext>(
    {} as IOperatorContext
);

export function OperatorProvider(props: IOperatorProviderProps) {
    const [operators, setOperators] = useState<IOperator[]>([]);

    async function deleteOperator(id: string) {
        await deleteOperatorById(id);
    }

    return (
        <OperatorContext.Provider
            value={{
                operators,
                deleteOperator,
            }}
        >
            {props.children}
        </OperatorContext.Provider>
    );
}

export function useOperators() {
    const context = useContext(OperatorContext);

    return context;
}
