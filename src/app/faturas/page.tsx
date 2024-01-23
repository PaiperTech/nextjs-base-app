/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import FilterButton from "@/components/Buttons/FilterButton"
import MainFilter from "@/components/MainFilter"
import { useEffect, useState } from "react";
import FaturasTable from "@/components/Tables/FaturasTable";
import DropDown from "@/components/DropDown";
import PopUp from "@/components/PopUp";
import * as S from './styles';

export default function Faturas() {

  const [selected, setSelected] = useState('Faturas');

  const [selectedOptionStatus, setSelectedOptionStatus] = useState<string | undefined>('');
  const [selectedOptionAno, setSelectedOptionAno] = useState<string | undefined>('');
  const [selectedOptionMes, setSelectedOptionMes] = useState<string | undefined>('');

  const optionsStatus = [
    { value: 'Paga', label: 'Paga' },
    { value: 'Analisar', label: 'Analisar' },
    { value: 'Em Aberto', label: 'Em Aberto' },
    { value: 'Cancelada', label: 'Cancelada' },
    // Bota as opções ai meu parcero
    ];

  const optionsAno = [
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    // Bota as opções ai meu parcero
    ];
    
  const optionsMes = [
    { value: 'Janeiro', label: 'Janeiro' },
    { value: 'Fevereiro', label: 'Fevereiro' },
    { value: 'Março', label: 'Março' },
    { value: 'Abril', label: 'Abril' },
    { value: 'Maio', label: 'Maio' },
    { value: 'Junho', label: 'Junho' },
    { value: 'Julho', label: 'Julho' },
    { value: 'Agosto', label: 'Agosto' },
    { value: 'Setembro', label: 'Setembro' },
    { value: 'Outubro', label: 'Outubro' },
    { value: 'Novembro', label: 'Novembro' },
    { value: 'Dezembro', label: 'Dezembro' },
    // Bota as opções ai meu parcero
    ];
  
  const [isPopGenerate, setIsPopGenerate] = useState(false);
  const [isPopCanceled, setIsPopCanceled] = useState(false);

  useEffect(() => {
    // Verifica se o código está sendo executado no lado do cliente
    setIsPopCanceled(typeof window !== 'undefined' && window.location.search.includes('popCanceled=true'));
    setIsPopGenerate(typeof window !== 'undefined' && window.location.search.includes('popGenerate=true'));
  }, []);

  // console.log('isPopGenerate:', isPopGenerate);

  return (
    <div className="flex flex-col gap-8 pt-8">
      <MainFilter options={['Faturas']} selected={selected} setSelected={setSelected}/>
      <S.SubHeaderWrapper>
        <S.Title>{selected}</S.Title>
        {/* <OutlineButton src='/assets/icons/download.svg' text='Baixar Relatório' /> */}
      </S.SubHeaderWrapper>
      <S.FiltersWrapper>
      <DropDown
        selectedOption={selectedOptionStatus}
        setSelectedOption={setSelectedOptionStatus}
        options={optionsStatus} 
        placeHolder="Status" 
        widthProp="369px"/>
      <DropDown
        selectedOption={selectedOptionAno}
        setSelectedOption={setSelectedOptionAno}
        options={optionsAno} 
        placeHolder="Ano" 
        widthProp="265px"/>
      <DropDown
        selectedOption={selectedOptionMes}
        setSelectedOption={setSelectedOptionMes}
        options={optionsMes} 
        placeHolder="Mês" 
        widthProp="265px"/>
      
        <FilterButton />
      </S.FiltersWrapper>
      {isPopGenerate && (
        <PopUp text="Seu Boleto foi gerado com sucesso." onClose={() => setIsPopGenerate(false)} />
      )}
      {isPopCanceled && (
        <PopUp text="Seu Boleto foi cancelado com sucesso." onClose={() => setIsPopCanceled(false)} />
      )}
      <FaturasTable />
    </div >
  )
}

