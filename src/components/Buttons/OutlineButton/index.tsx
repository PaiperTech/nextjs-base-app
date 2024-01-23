/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import * as S from './styles';

interface ButtonProps {
    text: string;
    src?: string;
    hoverSrc?: string;
    onClick?: () => void;
}

export const OutlineButton:React.FC<ButtonProps> = ({ text, src, hoverSrc, onClick }) => {

    const [icon, setIcon] = useState(src);

    return (
        <S.Button 
            onClick={onClick}
            onMouseEnter={() => setIcon(hoverSrc || src)}
            onMouseLeave={() => setIcon(src)}
        >
            {src && <S.Icon src={icon} />}
            {text}
        </S.Button>

    );

};

export default OutlineButton;