import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;

    border-radius: 8px;
    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12); 

    margin-bottom: 80px;
`;

export const StyledTh = styled.th`
    color: #666;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 

    text-align: left;

    padding: 24px;

    border-bottom: 1px solid #E9E9EE; 
`;

export const StyledTd = styled.td`
    padding: 24px;
    text-align: left;

    color: #0D2D4F;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 

    border-bottom: 1px solid #E9E9EE; 
`;

export const StyledTdTest = styled.div`
    padding: 24px;
    height: 40px;
    width: 100px;
    border-radius: 20px;

    background-color: transparent;
`;

export const StyledTr = styled.tr`
    background-color: 'white';
`;

export const StyledTHead = styled.thead`
    border-bottom: 1px solid #ccc;
`;

export const ActionButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;

    align-items: center;
`;

export const PaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center; /* Centraliza os botões */
  margin-top: 0px; /* Espaçamento superior */
`;

export const PaginationButton = styled.button`
  display: flex;
  background-color: #FFF;
  color: var(--primary);
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &.active {
    color: #1A8ADD;
    text-decoration: underline;
  }

  &:hover{
    color: #1A8ADD;
  }

  .icon {
    width: 12px;
    height: 12px;
    margin-left: 4px;
    margin-right: 4px;
    margin-top: 2px;
  }
`;
