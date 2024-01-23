import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 135px;
    height: 50px;
    flex-shrink: 0; 

    border-radius: 8px;
    border: 1px dashed #0D2D4F;
    
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.03);
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const Text = styled.text`
    color: #0D2D4F;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;