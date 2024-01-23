import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    padding: 16px;

    height: 48px;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 8px;

    gap: 8px;
`;

export const SearchIcon = styled.img`
    height: 20px;
    width: 20px;
`;

export const SearchText = styled.input`
    width: 100%;

    outline: none;

    font-family: 'Inter', sans-serif;
    font-weight: 400; 
    font-size: 14px; 
    color: #C4C4C4;
`;