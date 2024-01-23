/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import ActionButton from '@/components/Buttons/ActionButton';
import {getPropostas} from '@/services/propostas';
import { useRouter } from 'next/navigation';
import { Propostas } from '@/components/operator/Interfaces/propostas';
import StatusCard from './StatusCard';
import * as S from './styles';
import Pagination from '../Pagination';

export function TodasPropostasTable() {
    const router = useRouter();

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

      return (
        <S.StyledTable>
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
            {propostas && propostas.map((item, index) => (
                    <S.StyledTr key={index}>
                    {/* <S.StyledTdTest /> */}
                    <S.StyledTd><StatusCard status={item.status}/></S.StyledTd>
                    <S.StyledTd>{item.subsidiaryName}</S.StyledTd>
                    <S.StyledTd>{item.employeeName}</S.StyledTd>
                    <S.StyledTd>{item.totalCreditValue}</S.StyledTd>
                    <S.StyledTd>{}</S.StyledTd>
                    <S.StyledTd>
                        <S.ActionButtonWrapper>
                            <ActionButton type='confirm'/>
                            <ActionButton type='delete'/>
                            <ActionButton onClick={() => router.push(`propostaPendente?${item.id}`)} type='redirect'/>
                        </S.ActionButtonWrapper>
                    </S.StyledTd>
                </S.StyledTr>))}
            </tbody>
            <tfoot>
                <Pagination pageSize={pageSize} page={currentPage} setPage={setCurrentPage} quantity={quantity} />
            </tfoot>
        </S.StyledTable>
      );
}

export default TodasPropostasTable;