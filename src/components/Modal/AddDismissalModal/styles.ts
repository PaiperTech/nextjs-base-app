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

    /* align-items: center; */

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

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;

    gap: 24px;
`;

export const SubDivider = styled.div`
    width: 100%;
    height: 1px;
    /* flex-shrink: 0; */
    /* background-color: #E9E9EE; */
    border: 1px dotted #E9E9EE;
    /* margin: auto; */
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DownloadButton = styled.button`
    border: 0;
    outline: none;

    background-color: transparent;

    &:hover {
        background-color: #F1F8FE;
    }

    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    align-items: center;
`;

export const ButtonIcon = styled.img`
    height: 14px;
    width: 14px;
`;

export const ButtonText = styled.text`
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    color: #0D2D4F;
`;

export const FileInput = styled.input`
    display: none;
`;

export const FileInputLabel = styled.label`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px;
    gap: 12px;

    border: 1px dashed #E9E9EE;

    background-color: #F5F5F5;

    &:hover {
        cursor: pointer;
    }
`;

export const LabelIcon = styled.img`
    width: 42px;
    height: 42px;
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

export const ObsInput = styled.textarea`
    width: 100%;
    height: 144px;

    padding: 16px;

    border-radius: 4px;
    border: 1px solid #E9E9EE;

    color: var(--gray-6, --gray-6);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    resize: none;
`
