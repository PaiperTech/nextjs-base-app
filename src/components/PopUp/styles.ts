import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Wrapper = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 50px; 
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
    width: 500px;
    height: 80px;
    background-color: #FFFF;
    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);
    border-radius: 8px;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

export const GreenLine = styled.div`
    width: 500px;
    height: 10px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: #00CD73;

    padding-top: 0px;
`;

export const SubWrapper = styled.div`
    display: flex;
    align-items: row;
    gap: 1rem;
    justify-content: space-between;
    padding: 8px;
    padding-top: 14px;
`;

export const LeftWrapper = styled.div`
    display: flex;
    align-items: row;
    gap: 1rem;
`;

export const PopIconConfirm = styled.img`
    width: 40px;
    height: 40px;
`;

export const PopTextWrapper = styled.div`

`;

export const PopText = styled.h1`
    color: #0D2D4F;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 3px;
`;
