import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: yellow;

    height: 88px;

    padding-left: 100px;
    padding-right: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-bottom: 1px solid #EDF0EF; 

`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: fit-content;
`;
