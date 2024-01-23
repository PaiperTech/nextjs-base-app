import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 56px;
    width: fit-content;

    padding: 0px 24px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 24px;

    background-color: #FFF;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);
    border-radius: 8px; 

`;

export const OptionWrapper = styled.div< {selected:boolean} >`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => (props.selected ? '#0D2D4F' : '#C4C4C4')};
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;


    border-bottom: ${props => (props.selected ? '2px solid #0D2D4F' : '0')};

    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        color: ${props => (props.selected ? '#0D2D4F' : '#666666')};
        cursor: pointer;
    }
`;
