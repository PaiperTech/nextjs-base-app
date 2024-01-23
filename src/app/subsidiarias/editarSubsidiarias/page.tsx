/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import MainFilter from "@/components/MainFilter"
import BackButton from '@/components/Buttons/BackButton';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import EditarSubsidiaria from "@/components/EditarSubsidiaria";
import * as S from './styles';

export default function Name() {

  const [selected, setSelected] = useState('Subsidiárias');
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <MainFilter options={['Subsidiárias']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <BackButton onClick={() => router.push('detalhesSubsidiarias')}/>
        <S.Title>Empresa</S.Title>
      </S.SubHeaderWrapper>
      <EditarSubsidiaria />

    </div >
  )
}
