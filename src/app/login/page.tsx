/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import ModalLogin from "@/components/ModalLogin"
import Logo from "@/components/Logo";
import * as S from './styles';

export default function Name() {

  return (
    <S.MainWrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.ModalLoginWrapper>
        <ModalLogin />
      </S.ModalLoginWrapper>
    </S.MainWrapper>
  )
}

