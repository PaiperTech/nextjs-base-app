/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React from 'react';
import * as S from './styles';

interface ButtonProps {
  onClick?: () => void; // Adicione a propriedade onClick à interface
}

export const ActionButton: React.FC<ButtonProps> = ({ onClick }) => (
    <S.Button onClick={onClick}>
      <S.Icon src="/assets/icons/redirect.svg"/>
    </S.Button>
  );

export default ActionButton;

