/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

'use client'

import { createContext, useContext, useState } from 'react';

import { deleteOperatorById } from '@/services/operator';
import {
    IOperator,
    IOperatorContext,
    IOperatorProviderProps,
} from './dto/operator.dto';

const OperatorContext = createContext<IOperatorContext>(
    {} as IOperatorContext
);

export function OperatorProvider(props: IOperatorProviderProps) {
    const [operators] = useState<IOperator[]>([]);

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
