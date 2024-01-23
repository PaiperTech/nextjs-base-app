/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import ActionButton from '@/components/Buttons/ActionButton';
import { useRouter } from 'next/navigation';
import { getFuncionarios } from '@/services/funcionarios';
import { useEffect, useState } from 'react';
import { Funcionarios } from '@/components/operator/Interfaces/funcionarios';
import StatusCard from './StatusCard';
import * as S from './styles';
import Pagination from '../Pagination';

export function LicencasTable() {

    const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]); 
    const [reloader] =useState(false);
    const [quantity, setQuantity] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 5;

    useEffect(() => {
        const fetchFuncionarios = async () => {
          try {
            const response = await getFuncionarios(pageSize, currentPage);
            setFuncionarios(response.employeeList);
            setQuantity(response.totalEmployees);
          } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
          }
        };
      
        fetchFuncionarios();
      }, [reloader, currentPage]);

    const router = useRouter();

    // eslint-disable-next-line no-unused-vars
    const dados = [
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Licença', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        // Adicione mais dados conforme necessário
      ];

      return (
        <S.StyledTable>
            <thead>
                <S.StyledTr>
                <S.StyledTh>Status</S.StyledTh>
                <S.StyledTh>Nome</S.StyledTh>
                <S.StyledTh>CPF</S.StyledTh>
                <S.StyledTh>Empresa</S.StyledTh>
                <S.StyledTh>Ações</S.StyledTh>
                </S.StyledTr>
            </thead>
            <tbody>
            {funcionarios.map((item, index) => {
                    if (item.status === 'LICENSE') {
                        return(
                            <S.StyledTr key={index}>
                                {/* <S.StyledTdTest /> */}
                                <S.StyledTd><StatusCard status={item.status}/></S.StyledTd>
                                <S.StyledTd>{item.name}</S.StyledTd>
                                <S.StyledTd>{item.cpf}</S.StyledTd>
                                <S.StyledTd>{item.subsidiaryName}</S.StyledTd>
                                <S.StyledTd>                            
                                    <ActionButton type='redirect' onClick={() => router.push('funcionario')}/>
                                </S.StyledTd>
                            </S.StyledTr>
                        )
                    } 
                        
                    
                })}
            </tbody>
            <tfoot>
                <Pagination pageSize={pageSize} page={currentPage} setPage={setCurrentPage} quantity={quantity} />
            </tfoot>
        </S.StyledTable>
      );
}

export default LicencasTable;