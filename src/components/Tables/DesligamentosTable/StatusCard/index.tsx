/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface CardProps {
    status: string;
}

// eslint-disable-next-line no-unused-vars
export const StatusCard: React.FC<CardProps> = ({ status }) => (
        <S.Wrapper>
            <S.Text>Desligado</S.Text>
        </S.Wrapper>
    );

export default StatusCard;