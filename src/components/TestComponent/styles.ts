import styled from 'styled-components';

export const Wrapper = styled.button`
    height: 48px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    /* padding-top: 12px;
    padding-bottom: 12px; */

    /* margin: 12px; */
    width: 320px;
    background-color: blue;

    border-radius: 16px;

    border: 0;
    vertical-align: baseline;

    transition: 0.5s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.07);
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        line-height: 20px;
        font-size: 12px;

        padding: 6px;
        width: 224px;
        height: 40px;
    }

    @media screen and (max-width: 400px) {
        width: 180px;
    }
`;

export const ButtonText = styled.text`
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 600;
    color: white;
    line-height: 150%;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;
