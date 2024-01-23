/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import MainFilter from "@/components/MainFilter"
import BackButton from '@/components/Buttons/BackButton';
import { useState } from "react";
import CriarSubsidiaria from "@/components/CriarSubsidiaria";
import { useRouter } from "next/navigation";
import * as S from './styles';

export default function Name() {

  const [selected, setSelected] = useState('Subsidiárias');
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <MainFilter options={['Subsidiárias']} selected={selected} setSelected={setSelected}/>
      <S.HeaderDiv>
        <S.SubHeaderWrapper>
            <BackButton onClick={() => router.push('./')}/>
            <S.Title>Criar subsidiária</S.Title>
        </S.SubHeaderWrapper>
        <S.CreateButton>Criar subsidiária</S.CreateButton>
      </S.HeaderDiv>
      <CriarSubsidiaria />
    </div >
  )
}
