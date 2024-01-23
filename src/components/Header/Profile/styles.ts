import styled from 'styled-components';

export const Wrapper = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        cursor: pointer;
        background-color: #E2EFFC;
    }

    padding: 4px;
    border-radius: 4px;
`;

// export const Icon = styled.img`

// `;

export const Icon = styled.div`
    width: 42px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #0D2D4F;
`;

export const AuxIcon = styled.img`
    width: 24px;
    aspect-ratio: 1;
`;