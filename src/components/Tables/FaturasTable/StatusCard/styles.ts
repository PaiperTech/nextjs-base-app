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
            case 'Em Aberto':
                return '#FFFEEA';
            case 'Cancelado':
                return '#FFF0F0';
            case 'Paga':
                return '#EEFFF6';
            case 'Analisar':
                return '#EEFFF6';
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
            case 'Em Aberto':
                return '#B96904';
            case 'Cancelado':
                return '#B20A0E';
            case 'Analisar':
                return '#0D2D4F';
            case 'Paga':
                return '#049154';
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