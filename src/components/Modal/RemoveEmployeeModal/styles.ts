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
    margin-left: -24px;
    background-color: #E9E9EE;
`;

export const Description = styled.text`
    color: #666;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;

export const DescriptionBold = styled.text`
    color: #666;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
`;

export const SubDivider = styled.div`
    width: 100%;
    height: 1px;
    /* flex-shrink: 0; */
    /* background-color: #E9E9EE; */
    border: 1px dotted #E9E9EE;
`;

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;

    gap: 12px;
`;


export const InfoTitle = styled.h2`
    color: #0D2D4F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ObsInput = styled.input`
    width: 100%;
    height: 48px;

    padding: 16px;

    outline: none;
    border-radius: 4px;
    border: 1px solid #E9E9EE;

    color: #C4C4C4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`;

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;

    gap: 24px;
`;

export const DropDown = styled.div`
    width: 100%;
    height: 48px;

    padding: 16px;

    color: #C4C4C4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    border: 1px solid #E9E9EE;
`;

export const OptionWrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;

    gap: 12px;
`;

export const OptionButton = styled.button`
    height: 6vh;
    width: 24vw;
    /* margin-top: 1rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ disabled }) => (disabled ?  'var(--primary)' : 'var(--disabled)')};
    background-color: ${({ disabled }) => (disabled ? '#F1F8FE' : 'yarn var(--gray-5)')};
    border: 1px solid ${({ disabled }) => (disabled ? 'var(--primary)' : 'var(--gray-5)')};
    border-radius: 5px;
    font-weight: bold;

    &:hover {
    background-color: ${({ disabled }) => (disabled ? '#F1F8FE' : 'var(--secondary)')};
    color: ${({ disabled }) => (disabled ?  'var(--primary)' : 'white')};
  }
`;

export const DateWrapper = styled.div`
    width: 100%;
    height: 48px;

    padding: 16px;

    color: #C4C4C4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 4px;
    border: 1px solid #E9E9EE;
`;

export const ValoresWrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;

    gap: 12px;
`;