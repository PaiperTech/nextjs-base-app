/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import InputSearchVariante from '@/components/Inputs/InputSearchVariante';
import FilterButton from '@/components/Buttons/FilterButton';
import DropDown from '@/components/DropDown';
import { useState } from 'react';
import * as S from './styles';

export function SearchSetup() {

    const [selectedOption, setSelectedOption] = useState<string | undefined>('');

    const options = [
    { value: 'Opção 1', label: 'Opção 1' },
    { value: 'Opção 2', label: 'Opção 2' },
    { value: 'Opção 3', label: 'Opção 3' },
    { value: 'Opção 4', label: 'Opção 4' },
    { value: 'Opção 5', label: 'Opção 5' },
    // Bota as opções ai meu parcero
    ];

    return (
        <S.Wrapper>
            <InputSearchVariante />
            <DropDown
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                options={options} 
                placeHolder="Selecione" 
                widthProp="350px"/>
            <FilterButton />
        </S.Wrapper>

    );

}

export default SearchSetup;