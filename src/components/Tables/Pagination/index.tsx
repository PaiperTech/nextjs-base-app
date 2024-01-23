/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import * as S from './styles';

interface PaginationProps{
  pageSize: number;
  page: number;
  // eslint-disable-next-line no-unused-vars
  setPage: (setPage: number) => void;
  quantity: number;
}

export const Pagination:React.FC<PaginationProps> = ({quantity, setPage, page, pageSize}) => {

  const [pageCount, setPageCount] = useState(0);
  // const offset = currentPage * pageSize;
  // const currentData = faturas.slice(offset, offset + pageSize);

  useEffect(() => {
    setPageCount(Math.ceil(quantity / pageSize));
  }, [quantity, pageSize]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  const generatePageButtons = () => {
    const buttons = [];

    if (pageCount > 4) {
      const visiblePages = 3;

      if (page >= pageCount - visiblePages) {
        // Caso esteja nas últimas 4 páginas
        if (page < pageCount) {
          buttons.push(
            <S.PaginationButton
              key={0}
              className={page === 0 ? 'active' : ''}
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
                className={page === i ? 'active' : ''}
                onClick={() => handlePageClick({ selected: i })}
              >
                {i + 1}
              </S.PaginationButton>
            );
          }
        }

      } else if (page < visiblePages) {
        // Caso esteja nas primeiras 4 páginas
        for (let i = 0; i < visiblePages; i++) {
          buttons.push(
            <S.PaginationButton
              key={i}
              className={page === i ? 'active' : ''}
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
            className={page === pageCount - 1 ? 'active' : ''}
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
            className={page === 0 ? 'active' : ''}
            onClick={() => handlePageClick({ selected: 0 })}
          >
            1
          </S.PaginationButton>
        );

        buttons.push(<S.PaginationButton key="ellipsis1" disabled>...</S.PaginationButton>);

        for (let i = page - 1; i <= page + 1; i++) {
          buttons.push(
            <S.PaginationButton
              key={i}
              className={page === i ? 'active' : ''}
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
            className={page === pageCount - 1 ? 'active' : ''}
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
            className={page === i ? 'active' : ''}
            onClick={() => handlePageClick({ selected: i })}
          >
            {i + 1}
          </S.PaginationButton>
        );
      }
    }

    return buttons;
  };

  return (
    <S.StyledTr>
      <S.StyledTd colSpan={6}>
        <S.PaginationContainer>
          <S.PaginationButton
            disabled={page === 0}
            onClick={() => handlePageClick({ selected: page - 1 })}
          >
            <S.InnerPaginationButtonText>
              <S.InnerPaginationButtonImage src="/assets/icons/arrow-pagination-back.svg" alt="Ícone" />
            </S.InnerPaginationButtonText>
            Anterior
          </S.PaginationButton>
          
          {generatePageButtons()}

          <S.PaginationButton
            disabled={page === pageCount - 1}
            onClick={() => handlePageClick({ selected: page + 1 })}
          >
            Próximo
            <S.InnerPaginationButtonText>
              <S.InnerPaginationButtonImage src="/assets/icons/arrow-pagination-forward.svg" alt="Ícone" />
            </S.InnerPaginationButtonText>
          </S.PaginationButton>
        </S.PaginationContainer>
      </S.StyledTd>
    </S.StyledTr>
  )
};

export default Pagination;