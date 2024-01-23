/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import {getSubsidiarias} from '@/services/subsidiaria';
import ActionButton from '@/components/Buttons/ActionButton';
import { useRouter } from 'next/navigation';
// import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { Subsidiarias } from '@/components/operator/Interfaces/subsidiaria';
import * as S from './styles';

export function SubsidiariasTable() {

    const [subsidiarias, setSubsidiarias] = useState<Subsidiarias[]>([]); 
    const [reloader] =useState(false);

    useEffect(() => {
        const fetchSubsidiarias = async () => {
          try {
            const pageSize = 10; 
            const page = 1; 
            const response = await getSubsidiarias(pageSize, page);
            setSubsidiarias(response.subsidiaryList);
          } catch (error) {
            console.error('Erro ao buscar propostas:', error);
          }
        };
      
        fetchSubsidiarias();
      }, [reloader]);

    const router = useRouter();

    // const dados: Subsidiaria[] = [
    //     { nome: 'Empresa1', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555',  },
    //     { nome: 'Empresa2', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     { nome: 'Empresa', cnpj: '11.111.111/0001-11', usuarios: '250', contato: '+55 11 95922-5555' },
    //     // Adicione mais dados conforme necessário
    //   ];

      // const handleActionButtonClick = (item: Subsidiarias) => {
      //   // Convert values to JSON format if needed
      //       dataJSON = JSON.stringify({
      //       nome: item.name,
      //       cnpj: item.cnpj,
      //       usuarios: item.employeesCount,
      //       contato: item.phone,
      //   });
  
      // // Set the cookies
      //   setCookie(undefined, 'data', dataJSON);
      //   // Navigate to detalhesSubsidiarias
      //   router.push('subsidiarias/detalhesSubsidiarias');
      // };
    

      return (
        <S.StyledTable>
            <thead>
                <S.StyledTr>
                <S.StyledTh>Nome</S.StyledTh>
                <S.StyledTh>CNPJ</S.StyledTh>
                <S.StyledTh>Usuários</S.StyledTh>
                <S.StyledTh>Contato</S.StyledTh>
                <S.StyledTh>Ações</S.StyledTh>
                </S.StyledTr>
            </thead>
            <tbody>
                {subsidiarias.map((item, index) => (
                <S.StyledTr key={index}>
                    <S.StyledTd>{item.name}</S.StyledTd>
                    <S.StyledTd>{item.cnpj}</S.StyledTd>
                    <S.StyledTd>{item.employeesCount}</S.StyledTd>
                    <S.StyledTd>{item.phone}</S.StyledTd>
                    <S.StyledTd>
                        <S.ActionButtonWrapper>
                        <ActionButton type="redirect" onClick={() => router.push(`subsidiarias/detalhesSubsidiarias?${item.id}`)} />

                        </S.ActionButtonWrapper>
                    </S.StyledTd>
                </S.StyledTr>
                ))}
            </tbody>
            <tfoot>
                <S.StyledTdTest />
            </tfoot>
        </S.StyledTable>
      );
}

export default SubsidiariasTable;