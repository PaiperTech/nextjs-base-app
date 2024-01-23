import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DisabledOverlay = styled.div`
    display: none;
`;

export const Wrapper = styled.div`
    background-color: white;
    width: 576px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    align-items: center;

    border-radius: 8px;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    padding: 24px;

`;

export const Title = styled.h1`
    color: #0D2D4F;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const Divider = styled.div`
    width: 576px;
    flex-shrink: 0;
    height: 1px; 
    /* margin-left: -24px; */
    background-color: #E9E9EE;
`;

export const Description = styled.text`
    color: #666;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;

    gap: 24px;
`;
