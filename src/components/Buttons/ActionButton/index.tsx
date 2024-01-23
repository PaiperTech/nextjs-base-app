/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/* eslint-disable import/extensions */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface ButtonProps {
    type: string;
    onClick?: () => void;
}

export const ActionButton:React.FC<ButtonProps> = ({ type, onClick }) => (
        <S.Button type={type} onClick={onClick}>
            <S.Icon src={
                type === 'confirm' ? '/assets/icons/confirm.svg'
                : type === 'delete' ? '/assets/icons/delete.svg'
                : type === 'delete-gray' ? '/assets/icons/xbutton.svg'
                : type === 'employee-out' ? '/assets/icons/employee-out.svg'
                : type === 'employee-in' ? '/assets/icons/employee-in.svg'
                : type === 'back' ? '/assets/icons/back.svg'
                : '/assets/icons/redirect.svg'} />
        </S.Button>

    );

export default ActionButton;