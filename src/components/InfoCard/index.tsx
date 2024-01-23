/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface CardProps {
    text: string;
    title: string;
}

export const InfoCard: React.FC<CardProps> = ({ text, title }) => (
        <S.Wrapper>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
        </S.Wrapper>
    );

export default InfoCard;