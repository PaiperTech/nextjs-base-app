import styled from 'styled-components';

export const Title = styled.h1`
    color: #0D2D4F;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
`;

export const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;  
    align-items: center;
`;


export const SubHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    gap: 10px;  
    align-items: center;
`;

export const Icon = styled.img`
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: space-between;
    align-items: center;
`;

export const CreateButton = styled.button`
    width: 181px;
    height: 46px;

    border-radius: 8px;
    background: #0E4A7E;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
    
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        transform: scale(1.03);
        cursor: pointer;
    }

`;
