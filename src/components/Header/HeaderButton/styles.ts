import styled from 'styled-components';

export const Button = styled.div<{ selected: boolean }>`
    background: ${props => (props.selected ? '#0E4A7E' : 'transparent')};

    /* background-color: transparent; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 18px;

    gap: 8px;

    /* max-width: 100%; */
    height: 48px;
    /* max-width: 152px; */

    border-radius: 24px;

    /* box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12); */
    
    color: ${props => (props.selected ? '#FFF' : '#0D2D4F')};

    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.03);
        cursor: pointer;

        background-color: #E2EFFC;
        color: #0D2D4F;
    }

`;

export const Icon = styled.img`
    width: 24px;

    aspect-ratio: 1;
`;

export const Text = styled.text< {selected: boolean} >`
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
`;