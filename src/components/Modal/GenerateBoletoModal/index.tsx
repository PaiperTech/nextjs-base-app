/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import 'react-toastify/dist/ReactToastify.min.css';
import Link from 'next/link';
import * as S from './styles';

interface ModalProps {
    isShowingGenerate: boolean;
    toggleGenerate: () => void;
}

export const GenerateBoletoModal: React.FC<ModalProps> = ( { isShowingGenerate, toggleGenerate } ) => { 

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingGenerate && toggleGenerate();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingGenerate, toggleGenerate])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleGenerate();
        }
    };

    const handleConfirm = async () => {
      toggleGenerate();
    }

    return (
        <>
            {/* <ToastContainer /> */}
            {isShowingGenerate ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Gerar Boleto</S.Title>
                    <S.Divider />
                    <S.Description>
                        Tem certeza que deseja gerar o boleto?
                    </S.Description>

                    <S.ButtonList>
                        <OutlineButton onClick={toggleGenerate} text='Cancelar' />
                        <Link href="/faturas?popGenerate=true" passHref>
                          <FilledButton onClick={handleConfirm} text='Confirmar' />
                        </Link>
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useGenerateProposalModal = () => {
    const [isShowingGenerate, setIsShowingGenerate] = useState(false);
  
    function toggleGenerate() {
      setIsShowingGenerate(!isShowingGenerate);
    }
  
    return {
      isShowingGenerate,
      toggleGenerate,
    }
  }

export default GenerateBoletoModal;