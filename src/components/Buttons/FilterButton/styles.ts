/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.div`
    width: 104px;
    height: 48px;

    border-radius: 8px;
    background: #0E4A7E;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;
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
    }

`;