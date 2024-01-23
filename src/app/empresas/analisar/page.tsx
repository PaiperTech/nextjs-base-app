/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import { useState } from "react";
import EmpresaCard from "@/components/EmpresaCard";
import EmpresaFilter from "@/components/EmpresaFilter";
import ActionButton from '@/components/Buttons/ActionButton';
import StatusCard from "@/components/Tables/FaturasTable/StatusCard";
import DadosContratoTableRemove from "@/components/Tables/DadosContratoTableRemove";
import AddFuncionariosTable from "@/components/Tables/AddFuncionariosTable";
import GenerateBoletoModal, { useGenerateProposalModal } from "@/components/Modal/GenerateBoletoModal";
import FilledButton from "@/components/Buttons/FilledButton";
import * as S from './styles';

export default function Analisar() {

  const [selected, setSelected] = useState('Empresa');
  const { isShowingGenerate, toggleGenerate } = useGenerateProposalModal();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <GenerateBoletoModal {...{isShowingGenerate, toggleGenerate}} />
      <EmpresaFilter options={['Faturas', 'Empresa']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.SectorWrapper>
          <ActionButton type='back'/>
          <S.Title>Empresa</S.Title>
          <StatusCard status="Analisar" />
        </S.SectorWrapper>
        <S.SectorWrapper>
          <FilledButton src='/assets/icons/approve-white.svg' text='Gerar Boleto' onClick={toggleGenerate} />
        </S.SectorWrapper>
      </S.SubHeaderWrapper>
      <EmpresaCard/>
      <DadosContratoTableRemove />
      <AddFuncionariosTable />
    </div >
  )
}

