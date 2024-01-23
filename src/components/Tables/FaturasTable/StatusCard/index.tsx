/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface CardProps {
    status: string;
}

export const StatusCard: React.FC<CardProps> = ({ status }) => (
        <S.Wrapper status={status}>
            <S.Icon src={
                status === 'Paga' ? '/assets/icons/approve.svg' : 
                status === 'Analisar' ? '/assets/icons/Analisar.svg' :
                status === 'Em Aberto' ? '/assets/icons/EmAnalise.svg'
                : '/assets/icons/cancel.svg'
            }/>
            <S.Text status={status}>{status}</S.Text>
        </S.Wrapper>
    );

export default StatusCard;