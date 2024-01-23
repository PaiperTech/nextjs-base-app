import styled from 'styled-components';

export const Wrapper = styled.div<{status: string}>`
    height: 32px;
    flex-shrink: 0; 
    width: fit-content;

    padding: 8px 18px;

    border-radius: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.status === 'ACTIVE' ? '#EEFFF6' : '#FFF0F0'};

    gap: 8px;

`;

export const Icon = styled.div<{status: string}>`
    width: 6px;
    aspect-ratio: 1;
    border-radius: 3px;
    background-color: ${(props) => props.status === 'ACTIVE' ? '#00CD73' : '#CF060B'};
`;

export const Text = styled.text<{status: string}>`
    color: ${(props) => props.status === 'ACTIVE' ? '#049154' : '#B20A0E'};
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;