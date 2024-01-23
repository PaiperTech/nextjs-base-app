import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;

    border-radius: 8px;
    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12); 

    margin-bottom: 16px;
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
    padding-bottom: 0px;
    width: 100%;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 2; /* Ajuste a z-index para ficar acima do StyledThLeft */
`;

export const StyledTd = styled.td`
    color: #0D2D4F;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
    padding: 24px;
    padding-bottom: 0px;
    width: 100%;
    position: sticky;
    left: 0;
    background-color: white;
    z-index: 3;
`;

export const StyledTdTitle = styled.td`
    padding: 24px;
    text-align: left;

    color: #0D2D4F;
    font-family: 'Inter',sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    width: 100%;
    position: sticky;
    left: 0;
    background-color: white;
    border-radius: 8px;
    z-index: 1;
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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
