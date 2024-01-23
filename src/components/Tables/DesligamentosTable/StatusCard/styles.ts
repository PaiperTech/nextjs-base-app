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

    background-color: #FFF0F0;

    gap: 8px;

`;

export const Icon = styled.img`
    width: 16px;
    aspect-ratio: 1;
`;

export const Text = styled.text`
    color: #B20A0E;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;