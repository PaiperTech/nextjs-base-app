/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

'use client'

import ModalEmailVerification from "@/components/ModalEmailVerification"
import Logo from "@/components/Logo";
import * as S from './styles';

export default function Name() {

  return (
    <S.MainWrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.ModalLoginWrapper>
        <ModalEmailVerification />
      </S.ModalLoginWrapper>
    </S.MainWrapper>
  )
}

