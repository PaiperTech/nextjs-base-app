/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
/* eslint-disable import/extensions */
import React from 'react';
import * as S from './style';

interface ButtonProps {
    type: string;
    text: string;
    onClick?: () => void;
}

// eslint-disable-next-line arrow-body-style
const DetailButton: React.FC<ButtonProps> = ({ type, text, onClick }) => {
    return (
        <S.Button type={type} onClick={onClick}>
            <S.Icon src={
                type === 'edit' ? '/assets/icons/edit.svg'
                : type === 'cancel' ? '/assets/icons/cancel.svg'
                : '/assets/icons/save.svg'} />
            {text && <S.ButtonText>{text}</S.ButtonText>} 
        </S.Button>
    );
};

export default DetailButton;

