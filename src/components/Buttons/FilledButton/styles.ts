import styled from 'styled-components';

export const Button = styled.div`
    width: fit-content;
    height: 48px;

    padding: 12px 32px;

    border-radius: 8px;
    background: #0E4A7E;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.03);
        cursor: pointer;

        background-color: #113F69;

        border: 0px;

        color: #fff;
    }
 
    &:active {
        background-color: #0D2D4F;
    }

`;

export const Icon = styled.img`
    width: 13px;
    aspect-ratio: 1;
`;