/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as S from './styles';

interface ModalProps {
    isShowingSendBase: boolean;
    toggleSendBase: () => void;
}

export const SendBaseModal: React.FC<ModalProps> = ( { isShowingSendBase, toggleSendBase } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingSendBase && toggleSendBase();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingSendBase, toggleSendBase])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleSendBase();
        }
    };

    const handleConfirm = async () => {
      toggleSendBase();
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

    return (
        <>
            {/* <ToastContainer /> */}
            {isShowingSendBase ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Enviar Base</S.Title>
                    <S.Divider />
                    <S.Description>
                        Caso o CPF imputado já existir no sistema, seus dados serão atualizados com o arquivo mais recente!  
                        <br />
                        <br />
                        O campo margem consignável deve considerar outros descontos já existentes.
                    </S.Description>
                    <S.SubDivider />

                    <S.TextWrapper>
                      <S.Description>
                        Use o botão ao lado para baixar um exemplo.
                      </S.Description>
                      <S.DownloadButton>
                        <S.ButtonIcon src='/assets/icons/download.svg' />
                        <S.ButtonText>
                          Exemplo de Base
                        </S.ButtonText>
                      </S.DownloadButton>
                    </S.TextWrapper>

                    <S.FileInput type="file" id="base" name="base"
                      accept=".csv"
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
                        <S.Description>(Only *.csv files will be accepted)</S.Description>
                      </S.FileInputLabel>
                    :
                      <S.FileInputLabel>
                        <S.Description>{baseFile.name}</S.Description>
                      </S.FileInputLabel>
                    }

                    <S.ButtonList>
                        <OutlineButton onClick={toggleSendBase} text='Cancelar' />
                        <FilledButton onClick={handleConfirm} text='Confirmar' />
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useSendBaseModal = () => {
    const [isShowingSendBase, setIsShowingSendBase] = useState(false);
  
    function toggleSendBase() {
      setIsShowingSendBase(!isShowingSendBase);
    }
  
    return {
      isShowingSendBase,
      toggleSendBase,
    }
  }

export default SendBaseModal;