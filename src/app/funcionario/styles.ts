import styled from 'styled-components';

export const Title = styled.h1`
    color: #0D2D4F;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
`;

export const SubHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const FiltersWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 16px;
`;

export const DataWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 28px;

    padding: 28px;
    border-radius: 8px;

    box-shadow: 0px 8px 50px 0px rgba(13, 45, 79, 0.12);

    background-color: #FFF;

`;

export const DataTitle = styled.text`
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    color: rgba(13, 45, 79, 1);

`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    border: 1px dashed rgba(233, 233, 238, 1);
`;

export const InfoList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 32px;

    flex-wrap: wrap;
`;

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    align-self: flex-end;

    gap: 24px;
`;
