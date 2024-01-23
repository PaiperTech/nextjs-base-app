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

    background-color: red;
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
    justify-content: flex-start;
`;
