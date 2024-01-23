/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import FilterButton from "@/components/Buttons/FilterButton"
import InputSearch from "@/components/Inputs/InputSearch"
import MainFilter from "@/components/MainFilter"
import FuncionariosTable from "@/components/Tables/FuncionariosTable";
import { useState } from "react";
import InputSelectMain from "@/components/Selects/InputSelectMain";
import OutlineButton from "@/components/Buttons/OutlineButton";
import DesligamentosTable from "@/components/Tables/DesligamentosTable";
import LicencasTable from "@/components/Tables/LicencasTable";
import SendBaseModal, { useSendBaseModal } from "@/components/Modal/SendBaseModal";
import AddLicenseModal, { useAddLicenseModal } from "@/components/Modal/AddLicenceModal";
import AddDismissalModal, { useAddDismissalModal } from "@/components/Modal/AddDismissalModal";
import * as S from './styles';

export default function Name() {

  const [selected, setSelected] = useState('Funcionários');
  const { isShowingSendBase, toggleSendBase } = useSendBaseModal();
  const { isShowingAddDismissal, toggleAddDismissal } = useAddDismissalModal();
  const { isShowingAddLicense, toggleAddLicense } = useAddLicenseModal();

  return (
    <div className="flex flex-col gap-8 pt-8">
      <SendBaseModal {...{isShowingSendBase, toggleSendBase}} />
      <AddLicenseModal {...{isShowingAddLicense, toggleAddLicense}} />
      <AddDismissalModal {...{isShowingAddDismissal, toggleAddDismissal}} />
      <MainFilter options={['Funcionários', 'Desligamentos', 'Licenças']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.Title>{selected}</S.Title>

      {
        selected === 'Funcionários' ? 
        <S.ButtonList>
          <OutlineButton text='Baixar base' src='/assets/icons/download.svg' hoverSrc='/assets/icons/download_hover.svg' />
          <OutlineButton text='Enviar base' src='/assets/icons/upload.svg' hoverSrc='/assets/icons/upload_hover.svg' onClick={toggleSendBase} />
        </S.ButtonList> :
        selected === 'Desligamentos' ? 
        <S.ButtonList>
          <OutlineButton text='Adicionar desligamento' hoverSrc='/assets/icons/add_hover.svg' src='/assets/icons/add.svg' onClick={toggleAddDismissal} />
        </S.ButtonList>
        :
        <S.ButtonList>
          <OutlineButton text='Adicionar Licença' hoverSrc='/assets/icons/add_hover.svg' src='/assets/icons/add.svg' onClick={toggleAddLicense}/>
        </S.ButtonList>
      }
        
      </S.SubHeaderWrapper>
      <S.FiltersWrapper>
        <InputSearch />
        <InputSelectMain />
        <FilterButton />
      </S.FiltersWrapper>
      {
        selected === 'Funcionários' ? 
        <FuncionariosTable /> : 
        selected === 'Desligamentos' ?
        <DesligamentosTable /> : 
        <LicencasTable />
      }
    </div >
  )
}

