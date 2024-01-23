/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import * as S from './styles';

interface CardProps {
    status: string;
}

// eslint-disable-next-line react/function-component-definition
export const StatusCard: React.FC<CardProps> = ({ status }) => (
        <S.Wrapper status={status}>
            <S.Icon status={status}/>
            <S.Text status={status}>
                {status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
            </S.Text>
        </S.Wrapper>
    );

export default StatusCard;