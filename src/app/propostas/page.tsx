/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import FilterButton from "@/components/Buttons/FilterButton"
import InputSearch from "@/components/Inputs/InputSearch"
import MainFilter from "@/components/MainFilter"
import { useState } from "react";
import InputSelectMain from "@/components/Selects/InputSelectMain";
import PropostasPendentesTable from "@/components/Tables/PropostasPendentesTable";
import OutlineButton from "@/components/Buttons/OutlineButton";
import TodasPropostasTable from "@/components/Tables/TodasPropostasTable";
import * as S from './styles';

export default function Name() {

  const [selected, setSelected] = useState('Propostas Pendentes');

  return (
    <div className="flex flex-col gap-8 pt-8">
      <MainFilter options={['Propostas Pendentes', 'Todas as Propostas']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.Title>{selected}</S.Title>
        <OutlineButton src='/assets/icons/download.svg' hoverSrc='/assets/icons/download_hover.svg' text='Baixar Relatório' />
      </S.SubHeaderWrapper>
      <S.FiltersWrapper>
        <InputSearch />
        <InputSelectMain />
        <FilterButton />
      </S.FiltersWrapper>
      {
        selected === 'Propostas Pendentes' ? 
        <PropostasPendentesTable /> : 
        <TodasPropostasTable />
      }
    </div >
  )
}

