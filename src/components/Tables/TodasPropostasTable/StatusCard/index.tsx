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
                status === 'IN_PROGRESS' ? '/assets/icons/EmAnalise.svg' : 
                status === 'APPROVED'? '/assets/icons/approve.svg':
                status === 'PAID'? '/assets/icons/approve.svg':
                status === 'AWAITING_APPROVAL' ? '/assets/icons/AguardandoAverbacao.svg':
                status === 'AWAITING_SIGNATURE' ? '/assets/icons/AguardandoAverbacao.svg'
                : '/assets/icons/cancel.svg'
            }/>
            <S.Text status={status}>{
                status === 'IN_PROGRESS' ? 'Em Análise' : 
                status === 'APPROVED'? 'Aprovado':
                status === 'PAID'? 'Pago':
                status === 'AWAITING_APPROVAL' ? 'Aguardando Averbação':
                status === 'AWAITING_SIGNATURE' ? 'Aguardando Assinatura'
                : 'Cancelado'
            }</S.Text>
        </S.Wrapper>
    );

export default StatusCard;