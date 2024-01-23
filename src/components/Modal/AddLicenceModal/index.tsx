/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import DropDown from '@/components/DropDown';
import * as S from './styles';

interface ModalProps {
    isShowingAddLicense: boolean;
    toggleAddLicense: () => void;
}

export const AddLicenseModal: React.FC<ModalProps> = ( { isShowingAddLicense, toggleAddLicense } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingAddLicense && toggleAddLicense();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingAddLicense, toggleAddLicense])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleAddLicense();
        }
    };

    const handleConfirm = async () => {
      toggleAddLicense();
      toast.success('Deu bom', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    const [baseFile, setBaseFile] = useState<File | null>(null);
    const [Funcionario, setFuncionario] = useState<string | undefined>('');
    const [Motivo, setMotivo] = useState<string | undefined>('');
    const [Periodo, setPeriodo] = useState<string | undefined>('');

    return (
        <>
            {/* <ToastContainer /> */}
            {isShowingAddLicense ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Adicionar Licença</S.Title>
                    <S.Divider />
                    <S.Description>
                        Preencha os campos abaixo para completar a licença de um funcionário.
                    </S.Description>
                    <S.SubDivider />

                    <S.InfoWrapper>
                        <S.InfoTitle>Funcionário</S.InfoTitle>
                        <DropDown
                          selectedOption={Funcionario}
                          setSelectedOption={setFuncionario}
                          options={
                            [
                              { value: 'Opção 1', label: 'Opção 1' },
                              { value: 'Opção 2', label: 'Opção 2' },
                              { value: 'Opção 3', label: 'Opção 3' },
                              { value: 'Opção 4', label: 'Opção 4' },
                              { value: 'Opção 5', label: 'Opção 5' },
                            ]
                          } 
                          placeHolder="Selecione o Funcionário" 
                          widthProp="100%"/>
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoTitle>Motivo</S.InfoTitle>
                        <DropDown
                          selectedOption={Motivo}
                          setSelectedOption={setMotivo}
                          options={
                            [
                              { value: 'Motivo 1', label: 'Motivo 1' },
                              { value: 'Motivo 2', label: 'Motivo 2' },
                              { value: 'Motivo 3', label: 'Motivo 3' },
                              { value: 'Motivo 4', label: 'Motivo 4' },
                              { value: 'Motivo 5', label: 'Motivo 5' },
                            ]
                          } 
                          placeHolder="Selecione o Motivo" 
                          widthProp="100%"/>
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoTitle>Período</S.InfoTitle>
                        <DropDown
                          selectedOption={Periodo}
                          setSelectedOption={setPeriodo}
                          options={
                            [
                              { value: 'Período 1', label: 'Período 1' },
                              { value: 'Período 2', label: 'Período 2' },
                              { value: 'Período 3', label: 'Período 3' },
                              { value: 'Período 4', label: 'Período 4' },
                              { value: 'Período 5', label: 'Período 5' },
                            ]
                          } 
                          placeHolder="Selecione o Período" 
                          widthProp="100%"/>
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoTitle>Observações</S.InfoTitle>
                        <S.ObsInput placeholder='Digite suas observações...' />
                    </S.InfoWrapper>


                    <S.InfoTitle>Anexar Documento de licença</S.InfoTitle>
                    <S.FileInput type="file" id="base" name="base"
                      onChange={(event) => {
                        if (event.target.files) {
                          const file = event.target.files[0];

                          setBaseFile(file);
                        }
                        
                      }}
                    />
                    {baseFile === null ? 
                      <S.FileInputLabel htmlFor='base'>
                        <S.LabelIcon src='/assets/icons/add_circle.svg' />
                        <S.Description>Drag & drop or click to choose files</S.Description>
                      </S.FileInputLabel> 
                    :
                      <S.FileInputLabel>
                        <S.Description>{baseFile.name}</S.Description>
                      </S.FileInputLabel>
                    }

                    <S.ButtonList>
                        <OutlineButton onClick={toggleAddLicense} text='Cancelar' />
                        <FilledButton onClick={handleConfirm} text='Confirmar' />
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useAddLicenseModal = () => {
    const [isShowingAddLicense, setIsShowingAddLicense] = useState(false);
  
    function toggleAddLicense() {
      setIsShowingAddLicense(!isShowingAddLicense);
    }
  
    return {
      isShowingAddLicense,
      toggleAddLicense,
    }
  }

export default AddLicenseModal;