/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import { useState } from "react";
import OutlineButton from "@/components/Buttons/OutlineButton";
import EmpresaCard from "@/components/EmpresaCard";
import EmpresaFilter from "@/components/EmpresaFilter";
import RedOutlineButton from "@/components/Buttons/RedOutlineButton";
import ActionButton from '@/components/Buttons/ActionButton';
import StatusCard from "@/components/Tables/FaturasTable/StatusCard";
import DadosContratoTable from "@/components/Tables/DadosContratoTable";
import FuncionariosRetiradosable from "@/components/Tables/FuncionariosRetiradosTable";
import CancelBoletoModal, { useCancelProposalModal } from "@/components/Modal/CancelBoletoModal";
import * as S from './styles';

export default function EmAberto() {

  const [selected, setSelected] = useState('Propostas Pendentes');
  const { isShowingCancel, toggleCancel } = useCancelProposalModal();


  return (
    <div className="flex flex-col gap-8 pt-8">
      <CancelBoletoModal {...{isShowingCancel, toggleCancel}} />
      <EmpresaFilter options={['Faturas', 'Empresa']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.SectorWrapper>
          <ActionButton type='back'/>
          <S.Title>Empresa</S.Title>
          <StatusCard status="Em Aberto" />
        </S.SectorWrapper>
        <S.SectorWrapper>
          <RedOutlineButton src='/assets/icons/cancel.svg' text='Cencelar Boleto' onClick={toggleCancel} />
          <OutlineButton src='/assets/icons/download.svg' text='Baixar Boleto' />
        </S.SectorWrapper>
      </S.SubHeaderWrapper>
      <EmpresaCard/>
      <DadosContratoTable />
      <FuncionariosRetiradosable />
    </div >
  )
}

