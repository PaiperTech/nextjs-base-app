import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 32px;
    flex-shrink: 0; 
    width: fit-content;

    padding: 8px 18px;

    border-radius: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #F1F8FE;

    gap: 8px;

`;

export const Icon = styled.img`
    width: 16px;
    aspect-ratio: 1;
`;

export const Text = styled.text`
    color: #0E4A7E;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;