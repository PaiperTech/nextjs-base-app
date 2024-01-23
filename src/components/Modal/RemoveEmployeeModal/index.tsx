/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import * as S from './styles';

interface ModalProps {
  isShowingRemove: boolean;
  toggleRemove: () => void;
  nomeFuncionario: string;
}

export const RemoveEmployeeModal: React.FC<ModalProps> = ({
  isShowingRemove,
  toggleRemove,
  nomeFuncionario,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line func-names
    const listener = function (e: KeyboardEvent) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        // eslint-disable-next-line no-unused-expressions
        isShowingRemove && toggleRemove();
      }
    };

    window.addEventListener('keyup', listener);

    return () => {
      window.removeEventListener('keyup', listener);
    };
  }, [isShowingRemove, toggleRemove]);

  // Adicione este useEffect para controlar o overflow do body
  useEffect(() => {
    document.body.style.overflowY = isShowingRemove ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isShowingRemove]);

  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleRemove();
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const router = useRouter();

  const handleConfirm = async () => {
    if (!selectedOption || !selectedDate) {
      // Adicione lógica para lidar com a falta de seleção
      return;
    }

    toggleRemove();
    await router.push('propostas');
    toast.success('Deu bom', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <>
      {isShowingRemove ? (
        <S.Overlay onClick={handleOverlayClick}>
          <S.Wrapper>
            <S.Title>Retirar Funcionário</S.Title>
            <S.Divider />
            <S.Description>
              Preencha os dados abaixo para retirar o funcionário <br />
              <S.DescriptionBold>{nomeFuncionario}</S.DescriptionBold> dessa fatura.
            </S.Description>
            <S.SubDivider />

            <S.InfoTitle>Selecione o Tipo</S.InfoTitle>
            <S.OptionWrapper>
              <S.OptionButton
                onClick={() => handleOptionClick('opção 1')}
                disabled={selectedOption === 'opção 1'}
              >
                Desligamento
              </S.OptionButton>
              <S.OptionButton
                onClick={() => handleOptionClick('opção 2')}
                disabled={selectedOption === 'opção 2'}
              >
                Licença
              </S.OptionButton>
              <S.OptionButton
                onClick={() => handleOptionClick('opção 3')}
                disabled={selectedOption === 'opção 3'}
              >
                Desenquadramento
              </S.OptionButton>
            </S.OptionWrapper>

            <S.InfoWrapper>
              <S.InfoTitle>Motivo</S.InfoTitle>
              <S.DropDown>Selecione</S.DropDown>
            </S.InfoWrapper>

            <S.InfoWrapper>
              <S.InfoTitle>Data da Rescisão</S.InfoTitle>
              <S.DateWrapper>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Selecione uma data"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={15}
                />
              </S.DateWrapper>
            </S.InfoWrapper>

            <S.ValoresWrapper>
              <S.InfoWrapper>
                <S.InfoTitle>Valor Bruto</S.InfoTitle>
                <S.ObsInput placeholder="Digite o valor" />
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.InfoTitle>Valor a ser descontado</S.InfoTitle>
                <S.ObsInput placeholder="Digite o valor" />
              </S.InfoWrapper>
            </S.ValoresWrapper>

            <S.ButtonList>
              <OutlineButton onClick={toggleRemove} text="Cancelar" />
              <FilledButton onClick={handleConfirm} text="Confirmar" />
            </S.ButtonList>
          </S.Wrapper>
        </S.Overlay>
      ) : (
        <S.DisabledOverlay />
      )}
    </>
  );
};

export const useRemoveEmployeeModal = () => {
  const [isShowingRemove, setIsShowingRemove] = useState(false);

  function toggleRemove() {
    setIsShowingRemove(!isShowingRemove);
  }

  return {
    isShowingRemove,
    toggleRemove,
  };
};

export default RemoveEmployeeModal;