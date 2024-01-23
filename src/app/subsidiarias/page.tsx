/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import FilterButton from "@/components/Buttons/FilterButton"
import InputSearch from "@/components/Inputs/InputSearch"
import MainFilter from "@/components/MainFilter"
import OutlineButton from "@/components/Buttons/OutlineButton";
import SubsidiariasTable from "@/components/Tables/SubsidiariasTable";
import { useState } from "react";
import InputSelectMain from "@/components/Selects/InputSelectMain";
import { useRouter } from "next/navigation";
import * as S from './styles';

export default function Name() {

  const [selected, setSelected] = useState('Subsidiárias');
  const router = useRouter();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <MainFilter options={['Subsidiárias']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.Title>Subsidiárias</S.Title>
        <OutlineButton onClick={() => router.push('subsidiarias/criarSubsidiarias')} src='/assets/icons/somar.svg' text='Cadastrar subsidiária' />
      </S.SubHeaderWrapper>
      <S.FiltersWrapper>
        <InputSearch />
        <InputSelectMain />
        <FilterButton />
      </S.FiltersWrapper>
      <SubsidiariasTable />
    </div >
  )
}
