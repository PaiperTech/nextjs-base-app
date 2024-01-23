/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React from 'react';
import * as S from './styles';

interface CardProps {
    status: string;
}

export const StatusCard: React.FC<CardProps> = ({ status }) => (
        <S.Wrapper status={status}>
            <S.Icon src={
                status === 'Em Análise' ? '/assets/icons/EmAnalise.svg' : 
                status === 'Aguardando Averbação' ? '/assets/icons/AguardandoAverbacao.svg'
                : '/assets/icons/PrimeiroContato.svg'
            }/>
            <S.Text status={status}>{status}</S.Text>
        </S.Wrapper>
    );

export default StatusCard;