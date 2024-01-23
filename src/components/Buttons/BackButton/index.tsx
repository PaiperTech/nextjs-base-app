/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';


interface ButtonProps {
    onClick?: () => void; 
}


export const BackButton: React.FC<ButtonProps> = ({ onClick }) => (
        <S.Button onClick={onClick}>
            <S.Icon src='/assets/icons/back_black.svg' />
        </S.Button>

    );

export default BackButton;