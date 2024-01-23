import styled from 'styled-components';

interface InputProps{
    isRed: boolean;
}

interface TextProps{
    show: boolean;
}

interface ImageProps{
    show: boolean;
}

export const LoginWrapper = styled.div`
    height: 48vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
`;

export const LoginText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const LoginTextUp = styled.h1`
    color: var(--primary);
    font-size: 24px;
`;

export const LoginTextDown = styled.p`
    color: var(--primary);
    font-size: 15px;
`;

export const LoginBox = styled.div`
    margin-top: 1rem;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const LoginBoxText = styled.p`
    color: var(--primary);
    margin-bottom: 0px;
    margin-left: 2px;
`;

export const LoginBoxEmail = styled.input<InputProps>`
    height: 6vh;
    width: 24vw;
    outline: none;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border: 1px solid ${({ isRed }) => (isRed ? 'red' : 'var(--gray-5)')};
    border-radius: 5px;
`;

export const LoginButton = styled.button`
    height: 6vh;
    width: 24vw;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ disabled }) => (disabled ? 'var(--disabled)' : 'white')};
    background-color: ${({ disabled }) => (disabled ? 'var(--gray-5)' : 'var(--primary)')};
    border-radius: 5px;
    font-weight: bold;

    &:hover {
    background-color: ${({ disabled }) => (disabled ? 'var(--gray-5)' : 'var(--secondary)')};
  }
`;

export const EmailAndWarningWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const WarningWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const WarningText = styled.p<TextProps>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    color: #B20A0E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const WarningImage = styled.img<ImageProps>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`;
