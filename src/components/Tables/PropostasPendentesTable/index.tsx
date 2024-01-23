/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect , useState } from 'react';

import ActionButton from '@/components/Buttons/ActionButton';
import {getPropostas} from '@/services/propostas';
import { useRouter } from 'next/navigation';
import DisapproveProposalModal, { useDisapproveProposalModal } from '@/components/Modal/DisapproveProposalModal';
import ApproveProposalModal, { useApproveProposalModal } from '@/components/Modal/ApproveProposalModal';
import { Propostas } from '@/components/operator/Interfaces/propostas';
import StatusCard from './StatusCard';
import * as S from './styles';
import Pagination from '../Pagination';

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

export function PropostasPendentesTable() {

    const [propostas, setPropostas] = useState<Propostas[]>([]); 
    const [reloader] =useState(false);
    const [quantity, setQuantity] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 5;

    useEffect(() => {
        const fetchPropostas = async () => {
          try {
            const response = await getPropostas(pageSize, currentPage);
            setPropostas(response.proposalList);
            setQuantity(response.totalProposals);
          } catch (error) {
            console.error('Erro ao buscar propostas:', error);
          }
        };
      
        fetchPropostas();
      }, [reloader, currentPage]);


    // const dados = [
    //     { status: 'Em Análise', empresa: 'Empresa', cliente: 'Lucas Pavanelli', valor: 'R$10.000,00', data: '09/10/2023' },
    //     { status: 'Aguardando Averbação', empresa: 'Empresa', cliente: 'Lucas Pavanelli', valor: 'R$10.000,00', data: '09/10/2023' },
    //     { status: 'Primeiro Contato', empresa: 'Empresa', cliente: 'Lucas Pavanelli', valor: 'R$10.000,00', data: '09/10/2023' },
    //     { status: 'Em Análise', empresa: 'Empresa', cliente: 'Lucas Pavanelli', valor: 'R$10.000,00', data: '09/10/2023' },
    //     { status: 'Em Análise', empresa: 'Empresa', cliente: 'Lucas Pavanelli', valor: 'R$10.000,00', data: '09/10/2023' },
    //   ];

      const router = useRouter();

      const { isShowingDisapprove, toggleDisapprove } = useDisapproveProposalModal();
      const { isShowingApprove, toggleApprove } = useApproveProposalModal();

      return (
        <S.StyledTable>
            <DisapproveProposalModal {...{isShowingDisapprove, toggleDisapprove}} />
            <ApproveProposalModal {...{isShowingApprove, toggleApprove}} />
            <thead>
                <S.StyledTr>
                <S.StyledTh>Situação</S.StyledTh>
                <S.StyledTh>Empresa</S.StyledTh>
                <S.StyledTh>Cliente</S.StyledTh>
                <S.StyledTh>Valor</S.StyledTh>
                <S.StyledTh>Data</S.StyledTh>
                <S.StyledTh>Ações</S.StyledTh>
                </S.StyledTr>
            </thead>
            <tbody>
            {propostas && propostas.map((item, index) => {
                  if (item.status === 'IN_PROGRESS' || item.status === 'AWAITING_APPROVAL' || item.status === 'AWAITING_SIGNATURE') {
                    return(
                    <S.StyledTr key={index}>
                    {/* <S.StyledTdTest /> */}
                    <S.StyledTd><StatusCard status={item.status}/></S.StyledTd>
                    <S.StyledTd>{item.subsidiaryName}</S.StyledTd>
                    <S.StyledTd>{item.employeeName}</S.StyledTd>
                    <S.StyledTd>{item.totalCreditValue}</S.StyledTd>
                    <S.StyledTd>{formatDate(item?.date)}</S.StyledTd>
                    <S.StyledTd>
                        <S.ActionButtonWrapper>
                            <ActionButton onClick={toggleApprove} type='confirm'/>
                            <ActionButton onClick={toggleDisapprove} type='delete'/>
                            <ActionButton onClick={() => router.push(`propostaPendente?${item.id}`)} type='redirect'/>
                        </S.ActionButtonWrapper>
                    </S.StyledTd>
                </S.StyledTr>)
                  } 
                    
                  
                  
                })}
            </tbody>
            <tfoot>
                <Pagination pageSize={pageSize} page={currentPage} setPage={setCurrentPage} quantity={quantity} />
            </tfoot>
        </S.StyledTable>
      );
}

export default PropostasPendentesTable;