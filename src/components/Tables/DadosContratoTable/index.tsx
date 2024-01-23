/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import SearchSetup from '@/components/SearchSetup';
import * as S from './styles';

export function DadosContratoTable() {
  const dados = [
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
    { contrato: 'XYZ', name: 'Lucas Pavanelli', cpf: '499.124.848-11', parcela: '12', valor: '600,00' },
  ];
// início lógica para paginação ===========
const pageSize = 4; // Número de elementos por página
const [currentPage, setCurrentPage] = useState(0);

const pageCount = Math.ceil(dados.length / pageSize);
const offset = currentPage * pageSize;
const currentData = dados.slice(offset, offset + pageSize);

const handlePageClick = ({ selected }: { selected: number }) => {
  setCurrentPage(selected);
};

const generatePageButtons = () => {
  const buttons = [];

  if (pageCount > 4) {
    const visiblePages = 3;

    if (currentPage >= pageCount - visiblePages) {
      // Caso esteja nas últimas 4 páginas
      if (currentPage < pageCount) {
        buttons.push(
          <S.PaginationButton
            key={0}
            className={currentPage === 0 ? 'active' : ''}
            onClick={() => handlePageClick({ selected: 0 })}
          >
            1
          </S.PaginationButton>
        );

        buttons.push(<S.PaginationButton key="ellipsis1" disabled>...</S.PaginationButton>);
        for (let i = pageCount - visiblePages; i < pageCount; i++) {
          buttons.push(
            <S.PaginationButton
              key={i}
              className={currentPage === i ? 'active' : ''}
              onClick={() => handlePageClick({ selected: i })}
            >
              {i + 1}
            </S.PaginationButton>
          );
        }
      }

    } else if (currentPage < visiblePages) {
      // Caso esteja nas primeiras 4 páginas
      for (let i = 0; i < visiblePages; i++) {
        buttons.push(
          <S.PaginationButton
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageClick({ selected: i })}
          >
            {i + 1}
          </S.PaginationButton>
        );
      }

      buttons.push(<S.PaginationButton key="ellipsis" disabled>...</S.PaginationButton>);
      buttons.push(
        <S.PaginationButton
          key={pageCount - 1}
          className={currentPage === pageCount - 1 ? 'active' : ''}
          onClick={() => handlePageClick({ selected: pageCount - 1 })}
        >
          {pageCount}
        </S.PaginationButton>
      );
    } else {
      // Caso esteja no meio
      buttons.push(
        <S.PaginationButton
          key={0}
          className={currentPage === 0 ? 'active' : ''}
          onClick={() => handlePageClick({ selected: 0 })}
        >
          1
        </S.PaginationButton>
      );

      buttons.push(<S.PaginationButton key="ellipsis1" disabled>...</S.PaginationButton>);

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        buttons.push(
          <S.PaginationButton
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageClick({ selected: i })}
          >
            {i + 1}
          </S.PaginationButton>
        );
      }

      buttons.push(<S.PaginationButton key="ellipsis2" disabled>...</S.PaginationButton>);

      buttons.push(
        <S.PaginationButton
          key={pageCount - 1}
          className={currentPage === pageCount - 1 ? 'active' : ''}
          onClick={() => handlePageClick({ selected: pageCount - 1 })}
        >
          {pageCount}
        </S.PaginationButton>
      );
    }
  } else {
    for (let i = 0; i < pageCount; i++) {
      buttons.push(
        <S.PaginationButton
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handlePageClick({ selected: i })}
        >
          {i + 1}
        </S.PaginationButton>
      );
    }
  }

  return buttons;
};
// fim da lógica de paginação ==========
  return (
    <S.StyledTable>
      <thead>
        <S.StyledTr>
          <S.StyledTdTitle colSpan={5}>Detalhes do Contrato</S.StyledTdTitle>
        </S.StyledTr>
        <S.StyledTr>
          <S.FiltersWrapper colSpan={5}>
            <SearchSetup />
          </S.FiltersWrapper>
        </S.StyledTr>
        <S.StyledTr>
          <S.StyledTh>Contrato</S.StyledTh>
          <S.StyledTh>Nome</S.StyledTh>
          <S.StyledTh>CPF</S.StyledTh>
          <S.StyledTh>Parcela</S.StyledTh>
          <S.StyledTh>Valor</S.StyledTh>
        </S.StyledTr>
      </thead>
      <tbody>
{/* NÃO ESQUECER DE MUDAR "dados.map" para "currentData.map" para aplicar paginação */}
        {currentData.map((item, index) => (
          <S.StyledTr key={index}>
            <S.StyledTd>{item.contrato}</S.StyledTd>
            <S.StyledTd>{item.name}</S.StyledTd>
            <S.StyledTd>{item.cpf}</S.StyledTd>
            <S.StyledTd>{item.parcela}</S.StyledTd>
            <S.StyledTd>R$ {item.valor}</S.StyledTd>
          </S.StyledTr>
        ))}
      </tbody>
      <tfoot>
{/* INICIO IMPLEMENTAÇÃO PAGINAÇÃO */}
        <S.StyledTr>
            <S.StyledTd colSpan={6}>
              <S.PaginationContainer>
                <S.PaginationButton
                  disabled={currentPage === 0}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                >
                  <span className="icon">
                    <img src="/assets/icons/arrow-pagination-back.svg" alt="Ícone" />
                  </span>
                  Anterior
                </S.PaginationButton>
                
                {generatePageButtons()}

                <S.PaginationButton
                  disabled={currentPage === pageCount - 1}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                >
                  Próximo
                  <span className="icon">
                    <img src="/assets/icons/arrow-pagination-forward.svg" alt="Ícone" />
                  </span>
                </S.PaginationButton>
              </S.PaginationContainer>
            </S.StyledTd>
          </S.StyledTr>
{/* FIM IMPLEMENTAÇÃO PAGINAÇÃO */}
      </tfoot>
    </S.StyledTable>
  );
}

export default DadosContratoTable;
