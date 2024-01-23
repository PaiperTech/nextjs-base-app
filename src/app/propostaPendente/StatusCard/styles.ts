import styled from 'styled-components';

export const Wrapper = styled.div<{status: string}>`
    height: 32px;
    flex-shrink: 0; 
    width: fit-content;

    padding: 8px 18px;

    border-radius: 16px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => 
        {switch (props.status) {
            case 'Em Análise':
                return '#FFFEEA';
            case 'Aguardando Averbação':
                return '#F1F8FE';
            case 'Primeiro Contato':
                return '#F1F8FE';
            default: 
                return '#FFFFFF';
        }}
    };

    gap: 8px;

`;

export const Icon = styled.img`
    width: 16px;
    aspect-ratio: 1;
`;

export const Text = styled.text<{status: string}>`
    color: ${(props) => 
        {switch (props.status) {
            case 'Em Análise':
                return '#B96904';
            case 'Aguardando Averbação':
                return '#0E4A7E';
            case 'Primeiro Contato':
                return '#0D2D4F';
            default: 
                return '#FFFFFF';
        }}
    };
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;