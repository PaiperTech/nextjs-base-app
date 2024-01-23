/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as S from './styles';

interface IHeaderButtonProps {
    src?: string;
    selectSrc?: string;
    text?: string;
    selected: boolean;
    navigate: string;
}

export const HeaderButton: React.FC<IHeaderButtonProps> = ({ src, selectSrc, text, selected, navigate }) => {
    const router = useRouter();
    const [hover, setHover] = useState(false);

    return (
        <S.Button 
            onClick={() => router.push(`/${  navigate}`)} 
            selected={selected}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <S.Icon src={selected  ?
                hover ? src : selectSrc
                : src} />
            <S.Text selected={selected}>{text}</S.Text>
        </S.Button>

    );

};

export default HeaderButton;