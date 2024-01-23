/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
/* eslint-disable import/extensions */
// DropDown.tsx
import React, { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import { getCustomStyles, theme } from './styles';

interface DropDownProps {
  selectedOption: string | undefined;
  setSelectedOption: Dispatch<SetStateAction<string | undefined>>;
  options: { value: string; label: string }[];
  placeHolder: string;
  widthProp?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  selectedOption,
  setSelectedOption,
  options,
  placeHolder,
  widthProp,
}) => {
  const customStyles = getCustomStyles({ width: widthProp });

  return (
    <Select
      value={
        selectedOption
          ? {
              label: selectedOption,
              value: selectedOption,
            }
          : {
              label: placeHolder,
              value: '',
            }
      }
      defaultInputValue={selectedOption}
      options={options}
      isMulti={false}
      isSearchable={false}
      onChange={(selectedOptionTemp: any) => {
        if (selectedOptionTemp && 'value' in selectedOptionTemp) {
          setSelectedOption(selectedOptionTemp.value);
        }
      }}
      styles={customStyles}
      theme={(th) => theme(th)}
      components={{
        IndicatorSeparator: null,
      }}
    />
  );
};

export default DropDown;
