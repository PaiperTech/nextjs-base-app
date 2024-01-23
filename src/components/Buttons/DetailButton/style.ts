/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Button = styled.div<{ type: string }>`
    width: 200px;
    height: fit-content;
    /* padding-right: 5px;
    padding-left: 5px; */
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: left;

    gap: 8px;

    border-radius: 4px;
    background: transparent;

    background-color: ${(props) => 
        props.type === 'edit' ? '#F1F8FE' 
        : props.type === 'cancel' ? '#FFF0F0' 
        : '#EEFFF6'
    };

    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.94px; 

    border: 2px solid ${(props) =>
        props.type === 'edit' ? '#0E4A7E' : props.type === 'cancel' ? '#B20A0E' : '#00CD73'};

    color: ${(props) =>
        props.type === 'edit' ? '#0E4A7E' : props.type === 'cancel' ? '#B20A0E' : '#00CD73'};

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.10);
        cursor: pointer;
    }

`;

export const Icon = styled.img`
    width: 20px;
    aspect-ratio: 1;
`;

export const ButtonText = styled.span`
    font-size: 16px;
    // line-height: 400px;
    display: flex;
    flex-wrap: nowrap;
`;