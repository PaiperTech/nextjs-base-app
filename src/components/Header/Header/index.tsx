/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import Logo from '@/components/Logo';
import React from 'react';
import HeaderButton from '../HeaderButton';
import Profile from '../Profile';
import * as S from './styles';

interface HeaderProps {
    selected?: number;
}

export const Header: React.FC<HeaderProps> = ({ selected }) => (
        <S.Wrapper>
            <Logo />
            <S.ButtonsWrapper>
                <HeaderButton src="/assets/icons/propostas.svg" selectSrc="/assets/icons/propostas_hover.svg" text="Propostas" selected={selected===2} navigate='propostas' />
                <HeaderButton src="/assets/icons/funcionarios.svg" selectSrc="/assets/icons/funcionarios_hover.svg" text="Funcionários" selected={selected===1} navigate='funcionarios' />
                <HeaderButton src="/assets/icons/faturas.svg" selectSrc="/assets/icons/faturas_hover.svg" text="Faturas" selected={selected===3} navigate='faturas' />
                <HeaderButton src="/assets/icons/subsidiarias.svg" selectSrc="/assets/icons/subsidiarias_hover.svg" text="Subsidiárias" selected={selected===4} navigate='subsidiarias' />
            </S.ButtonsWrapper>
            <Profile />

        </S.Wrapper>

    );

export default Header;