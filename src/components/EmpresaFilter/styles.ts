import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 56px;
    width: fit-content;

    padding: 0px 24px;
    padding-left: 0px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 16px;

    background-color: transparent;
`;

export const OptionWrapper = styled.div< {selected:boolean} >`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => (props.selected ? '#0D2D4F' : '#C4C4C4')};
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        color: ${props => (props.selected ? '#0D2D4F' : '#666666')};
        cursor: pointer;
    }
`;
