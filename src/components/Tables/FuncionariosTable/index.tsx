/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import {getFuncionarios} from '@/services/funcionarios';
import { useEffect, useState } from 'react';
import { Funcionarios } from '@/components/operator/Interfaces/funcionarios';
import * as S from './styles';
import StatusCard from './StatusCard';
import Pagination from '../Pagination';

export function FuncionariosTable() {

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
            console.log(response);
          } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
          }
        };
      
        fetchFuncionarios();
      }, [reloader, currentPage]);

    // eslint-disable-next-line no-unused-vars
    const dados = [
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Inativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Inativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
        { status: 'Ativo', name: 'Lucas Pavanelli', cpf: '111.111.111-11', empresa: 'Empresa', limite: '0,00', salario: '2.700,00' },
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
                <S.StyledTh>Limite Parcelado</S.StyledTh>
                <S.StyledTh>Salário Líquido</S.StyledTh>
                </S.StyledTr>
            </thead>
            <tbody>
                {funcionarios.map((item, index) => (
                <S.StyledTr key={index}>
                    {/* <S.StyledTdTest /> */}
                    <S.StyledTd><StatusCard status={item.status}/></S.StyledTd>
                    <S.StyledTd>{item.name}</S.StyledTd>
                    <S.StyledTd>{item.cpf}</S.StyledTd>
                    <S.StyledTd>{item.subsidiaryName}</S.StyledTd>
                    <S.StyledTd>R$ {item.installmentLimit}</S.StyledTd>
                    <S.StyledTd>R$ {item.salary}</S.StyledTd>
                </S.StyledTr>
                ))}
            </tbody>
            <tfoot>
                <Pagination pageSize={pageSize} page={currentPage} setPage={setCurrentPage} quantity={quantity} />
            </tfoot>
        </S.StyledTable>
      );
}

export default FuncionariosTable;