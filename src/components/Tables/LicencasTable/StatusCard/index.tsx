/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as S from './styles';

interface CardProps {
    status: string;
}

// eslint-disable-next-line react/function-component-definition
export const StatusCard: React.FC<CardProps> = ({ status }) => (
        <S.Wrapper>
            <S.Text>Licença</S.Text>
        </S.Wrapper>
    );

export default StatusCard;