import styled from 'styled-components';

// export const MainWrapper = styled.div`
//     height: 100%;
//     width: 100%;
//     margin: 0;
//     padding-left: 0;
//     position: fixed;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: var(--foreground);
// `;

export const VerificationWrapper = styled.div`
    height: 64vh;
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

export const VerificationText = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const VerificationTextUp = styled.h1`
    color: var(--primary);
    font-size: 24px;
`;

export const VerificationTextMid = styled.p`
    color: var(--gray-6);
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 0px;
`;

export const VerificationTextDown = styled.p`
    color: var(--primary);
    font-size: 15px;
`;


export const VerificationDiv = styled.div`
    margin-top: 1rem;
    padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const VerificationContainer = styled.div`
    margin-top: 1rem;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
`;

export const VerificationBox = styled.input`
    height: 8vh;
    width: 3vw;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 24px;
    border: 1px solid var(--gray-6);
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
`;

export const VerificationButton = styled.button`
    height: 6vh;
    width: 24vw;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.disabled ? 'var(--disabled)' : 'var(--foreground)')};
    background-color: ${(props) => (props.disabled ? 'var(--gray-5)' : 'var(--primary)')};
    border-radius: 5px;
    font-weight: bold;
    &:hover {
    background-color: ${(props) => (props.disabled ? 'var(--gray-5)' : 'var(--secondary)')};
    } 
`;
export const VerificationButtonBack = styled.button`
    height: 6vh;
    width: 24vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    background-color: transparent;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    font-weight: bold; 
    &:hover {
    color: white;
    background-color: var(--secondary);
    }
`;

export const NotRecievedText = styled.p`
    color: var(--gray-6);
    font-size: 15px;
`;

export const NotRecievedEmail = styled.button`
    margin-bottom: 1rem;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    color: var(--primary);
    font-size: 15px;
    &:hover {
    color: var(--secondary);
    }
    
`;

