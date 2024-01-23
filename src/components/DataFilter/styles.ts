import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
`;

export const WrapperStatus = styled.div`
    width: 369px;
    display: flex;
    flex-direction: row;

    padding: 16px;

    height: 48px;
    background-color: #FFFFFF;

    align-items: center;

    border-radius: 8px;

    gap: 8px;
`;

export const WrapperAno = styled.div`
    width: 265px;
    display: flex;
    flex-direction: row;

    padding: 16px;

    height: 48px;
    background-color: #FFFFFF;

    align-items: center;

    border-radius: 8px;

    gap: 8px;
`;

export const WrapperMes = styled.div`
    width: 265px;
    display: flex;
    flex-direction: row;

    padding: 16px;

    height: 48px;
    background-color: #FFFFFF;

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

export const CustomSelect = styled.div`
    position: relative;
    display: inline-block;
`;

export const SelectStyled = styled.div`
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:after {
    content: '';
    border-width: 6px 6px 0;
    border-color: #999 transparent transparent transparent;
    border-style: solid;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -3px;
    pointer-events: none;
  }
`;

export const SelectOptions = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const OptionItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;
