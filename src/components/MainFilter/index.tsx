/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React from 'react';
import * as S from './styles';

interface FilterProps {
    options: string[];
    selected: string;
    // eslint-disable-next-line no-unused-vars
    setSelected: (arg0: string) => void;
}


export const MainFilter: React.FC<FilterProps> = ( { options, selected, setSelected } ) => (
        <S.Wrapper>
            {options.map((option) => <S.OptionWrapper selected={selected===option} onClick={() => {
                setSelected(option);
                }}>{option}</S.OptionWrapper>)}
        </S.Wrapper>
    );

export default MainFilter;