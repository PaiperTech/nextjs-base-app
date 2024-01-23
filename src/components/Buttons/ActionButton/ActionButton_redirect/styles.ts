import styled from 'styled-components';

export const Button = styled.div`
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    background: transparent;

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