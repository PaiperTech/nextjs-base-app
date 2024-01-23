/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import ActionButton from '@/components/Buttons/ActionButton';
import { useEffect, useState } from 'react';
import { getFaturas } from '@/services/fatura';
import { Faturas } from '@/components/operator/Interfaces/faturas';
import Pagination from '../Pagination';
import StatusCard from './StatusCard';
import * as S from './styles';

export function FaturasTable() {

  const [faturas, setFaturas] = useState<Faturas[]>([]); 
  const [reloader] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;

  useEffect(() => {
      const fetchFaturas = async () => {
        try {
          const response = await getFaturas(pageSize, currentPage);
          setFaturas(response.invoiceList);
          setQuantity(response.totalInvoices);
        } catch (error) {
          console.error('Erro ao buscar funcionários:', error);
        }
      };
    
      fetchFaturas();
    }, [reloader, currentPage]);

    // eslint-disable-next-line no-unused-vars
    const dados = [
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Cancelado', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Em Aberto', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Paga', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Normal' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
        { status: 'Analisar', empresa: 'Empresa', data: '31/10/2023', valor: 'R$357,90', tipofatura: 'Rescisão' },
      ];

      return (
        <S.StyledTable>
            <thead>
                <S.StyledTr>
                <S.StyledTh>Situação</S.StyledTh>
                <S.StyledTh>Empresa</S.StyledTh>
                <S.StyledTh>Data</S.StyledTh>
                <S.StyledTh>Valor</S.StyledTh>
                <S.StyledTh>Tipo de Fatura</S.StyledTh>
                <S.StyledTh>Ações</S.StyledTh>
                </S.StyledTr>
            </thead>
{/* NÃO ESQUECER DE MUDAR "dados.map" para "currentData.map" para aplicar paginação */}
            <tbody>
                {faturas && faturas.map((item, index) => (
                <S.StyledTr key={index}>
                    {/* <S.StyledTdTest /> */}
                    <S.StyledTd><StatusCard status={item.status}/></S.StyledTd>
                    <S.StyledTd>{item.subsidiaryName}</S.StyledTd>
                    <S.StyledTd />
                    <S.StyledTd>{item.totalValue}</S.StyledTd>
                    <S.StyledTd>{item.type}</S.StyledTd>
                    <S.StyledTd>
                        <S.ActionButtonWrapper>
                            <ActionButton type='redirect'/>
                        </S.ActionButtonWrapper>
                    </S.StyledTd>
                </S.StyledTr>
                ))}
            </tbody>
            <tfoot>
              <Pagination pageSize={pageSize} page={currentPage} setPage={setCurrentPage} quantity={quantity}  />
      </tfoot>
        </S.StyledTable>
      );
}

export default FaturasTable;