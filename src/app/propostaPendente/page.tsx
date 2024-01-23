/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */

'use client'

import InfoCard from '@/components/InfoCard';
import DisapproveProposalModal, { useDisapproveProposalModal } from '@/components/Modal/DisapproveProposalModal';
import ApproveProposalModal, { useApproveProposalModal } from '@/components/Modal/ApproveProposalModal';
import FilledButton from '@/components/Buttons/FilledButton';
import { useEffect, useState } from 'react';
import { getPropostaById } from '@/services/propostas';
import { Proposta } from '@/components/operator/Interfaces/propostas';
import RedOutlineButton from '@/components/Buttons/RedOutlineButton';
import BackButton from '@/components/Buttons/BackButton';
import { useRouter } from 'next/navigation';
import StatusCard from './StatusCard';
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

function formatDate(date: Date): string {
  if (date) {
    const inputDate = new Date(date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  return 'Sem data';
}

function extractProposalId(inputString: string): string {
  const startIndex = inputString.indexOf('?');

  if (startIndex !== -1) {
    const proposalId = inputString.substring(startIndex + '?'.length);
    return proposalId;
  }

  return ''; // Return null if the substring is not found
}

export default function Name() {

  const { isShowingDisapprove, toggleDisapprove } = useDisapproveProposalModal();
  const { isShowingApprove, toggleApprove } = useApproveProposalModal();

  const [proposta, setProposta] = useState<Proposta>(); 
  const [reloader] = useState(false);
  const router = useRouter();

    useEffect(() => {
        const fetchPropostas = async () => {
          try {
            const response = await getPropostaById(extractProposalId(window.location.href));
            setProposta(response);
          } catch (error) {
            console.error('Erro ao buscar propostas:', error);
          }
        };
      
        fetchPropostas();
      }, [reloader]);

  return (
    <div className="flex flex-col gap-8 pt-8">
      <DisapproveProposalModal {...{isShowingDisapprove, toggleDisapprove}} />
      <ApproveProposalModal {...{isShowingApprove, toggleApprove}} />
      <S.SubHeaderWrapper>
        <S.TitleWrapper>
          <BackButton onClick={() => router.push('/propostas')} />
          <S.Title>{propostaMock.funcionario.nome}</S.Title>
          <StatusCard status='Em Análise'/>

        </S.TitleWrapper>
        <S.ButtonList>
          <RedOutlineButton text='Recusar' onClick={toggleDisapprove}/>
          <FilledButton text='Averbar' onClick={toggleApprove}/>
        </S.ButtonList>

      </S.SubHeaderWrapper>

      <S.DataWrapper>
        <S.DataTitle>Detalhes do Empréstimo</S.DataTitle>
        <S.Divider />
        <S.InfoList>
          <InfoCard title='Valor do Empréstimo' text={`R$ ${  proposta?.proposalDetails.totalCreditValue}`} />
          <InfoCard title='Taxa (%)' text={`${proposta?.proposalDetails.iofValue  } %`} />
          <InfoCard title='Valor Total' text={`R$ ${  proposta?.proposalDetails.amountToPay}`} />
          <InfoCard title='Data da solicitação' text={proposta? formatDate(proposta?.proposalDetails.requestDate) : 'Sem Data'} />
          <InfoCard title='Número de parcelas' text={`${proposta?.proposalDetails.amountInstallments  }`} />
          <InfoCard title='Valor da parcela' text={`R$${  proposta?.proposalDetails.installmentValue}`} />
          <InfoCard title='Data do primeiro vencimento' text={proposta? formatDate(proposta?.proposalDetails.date) : 'Sem Data'} />
        </S.InfoList>
      </S.DataWrapper>
      
      <S.DataWrapper>
        <S.DataTitle>Dados do Funcionário</S.DataTitle>
        <S.Divider />
        <S.InfoList>
          <InfoCard title='Nome' text={`${proposta?.employeeDetails.name  }`} />
          <InfoCard title='CPF' text={`${proposta?.employeeDetails.cpf  }`} />
          <InfoCard title='Nascimento' text={proposta? formatDate(proposta?.employeeDetails.birthDate) : 'Sem Data'} />
          <InfoCard title='Gênero' text={`${proposta?.employeeDetails.gender  }`} />
        </S.InfoList>
      </S.DataWrapper>

      <S.DataWrapper>
        <S.DataTitle>Dados da Empresa</S.DataTitle>
        <S.Divider />
        <S.InfoList>
          <InfoCard title='Nome' text={`${proposta?.subsidiaryDetails.name  }`} />
          <InfoCard title='CNPJ' text={`${proposta?.subsidiaryDetails.name  }`} />
          <InfoCard title='Data de abertura' text={proposta? formatDate(proposta?.subsidiaryDetails.openingDate) : 'Sem Data'} />
          <InfoCard title='Município' text={`${proposta?.subsidiaryDetails.city  }`} />
        </S.InfoList>
      </S.DataWrapper>

    </div >
  )
}

