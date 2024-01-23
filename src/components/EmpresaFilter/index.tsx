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


export const EmpresaFilter: React.FC<FilterProps> = ( { options, selected, setSelected } ) => (
         <S.Wrapper>
            {options.map((option, index) => (
                <React.Fragment key={option}>
                    <S.OptionWrapper selected={selected === option} onClick={() => setSelected(option)}>
                        {option}
                    </S.OptionWrapper>
                    {index < options.length - 1 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src="/assets/icons/redirect.svg" alt="Seta" width="6" height="6" />
                    )}
                </React.Fragment>
            ))}
        </S.Wrapper>
    );

export default EmpresaFilter;