/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

'use client'

import { useState } from "react";
import DropDown from "@/components/DropDown";

export default function Name() {

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
    <div>
      <h1>Exemplo de Uso do DropDown</h1>
      <DropDown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options} placeHolder="Selecione" />
      <p>Opção selecionada: {selectedOption}</p>
    </div>
  );

}

