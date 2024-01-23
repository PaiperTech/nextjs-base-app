/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Button = styled.div<{ type: string }>`
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    background: transparent;

    background-color: ${(props) => 
        props.type === 'confirm' ? '#0E4A7E' 
        : props.type === 'delete' ? '#B20A0E' 
        : props.type === 'delete-gray' ? 'var(--gray-5)'
        : props.type === 'employee-out' ? '#B20A0E'
        : props.type === 'employee-in' ? '#0E4A7E'
        : props.type === 'back' ? '#FFFFFF'
        : '#E9E9EE'
    };

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.10);
        cursor: pointer;

        /* background-color: #1A8ADD; */

        border: 0px;

        color: #fff;
    }
 
    &:active {
        background-color: #0D6CBC;
    }

`;

export const Icon = styled.img`
    width: 13px;
    aspect-ratio: 1;
`;