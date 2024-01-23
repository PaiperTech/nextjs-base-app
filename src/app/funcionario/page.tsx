/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import ActionButton from "@/components/Buttons/ActionButton";
import InfoCard from '@/components/InfoCard';
import { useEffect, useState } from 'react';
import { DetalhesFuncionario } from '@/components/operator/Interfaces/funcionarios';
import { detalhesFuncionario } from '@/services/funcionarios';
import StatusCard from "./StatusCard";
import * as S from './styles';

const propostaMock = {
  nome: 'Lucas Pavaneli',
  
  emprestimo: {
    valor: '10.000,00',
    taxa: '4.98',
    valorTotal: '18.000,00',
    data: '03/08/2023 - 17:45',
    parcelas: '24',
    valorParcela: '1.757,00',
    dataVencimento: '10/10/2023 - 00:00'
  },

  funcionario: {
    nome: 'Lucas Pavaneli',
    CPF: '111.111.111-11',
    nascimento: '03/05/2003',
    gender: 'Masculino'
  },

  Empresa: {
    nome: 'Empresa',
    CNPJ: '111111111111111',
    dataAbertura: '03/05/2003',
    city: 'São Paulo'
  }
}

function extractEmployeeId(inputString: string): string {
  const startIndex = inputString.indexOf('?');

  if (startIndex !== -1) {
    const proposalId = inputString.substring(startIndex + '?'.length);
    return proposalId;
  }

  return ''; // Return null if the substring is not found
}

export default function Name() {



    const [funcionario, setFuncionario] = useState<DetalhesFuncionario>(); 
    const [reloader] =useState(false);
    // eslint-disable-next-line no-unused-vars
    const pageSize = 5;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await detalhesFuncionario(extractEmployeeId(window.location.href));
        setFuncionario(response);
      } catch (error) {
        console.error('Erro ao buscar propostas:', error);
      }
    };
  
    fetchEmployees();
  }, [reloader]);

  return (
    <div className="flex flex-col gap-8 pt-8">
      <S.SubHeaderWrapper>
        <S.TitleWrapper>
          <ActionButton type='redirect'/>
          <S.Title>{propostaMock.funcionario.nome}</S.Title>
          <StatusCard status='Em Análise'/>

        </S.TitleWrapper>

      </S.SubHeaderWrapper>

      <S.DataWrapper>
        <S.DataTitle>Detalhes do Funcionário</S.DataTitle>
        <S.Divider />
        <S.InfoList>
          <InfoCard title='Nome' text={`${funcionario?.name  }`} />
          <InfoCard title='CPF' text={`${funcionario?.cpf  }`} />
          <InfoCard title='Empresa' text="Mock" />
          <InfoCard title='Salário Líquido' text={`R$ ${  funcionario?.salary}`} />
          <InfoCard title='Motivo' text="Mock" />
          <InfoCard title='Observações' text="Mock" />
          <InfoCard title='Documento do Desligamento' text="Mock.txt" />
        </S.InfoList>
      </S.DataWrapper>

    </div >
  )
}

