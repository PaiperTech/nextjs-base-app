/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface ButtonProps {
    text: string;
    src?: string;
    onClick?: () => void;
}

export const FilledButton: React.FC<ButtonProps> = ({ text, src, onClick }) => (
        <S.Button onClick={onClick}>
            {src && <S.Icon src={src} />}
            {text}
        </S.Button>

    );

export default FilledButton;