/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import 'react-toastify/dist/ReactToastify.min.css'; 
import Link from 'next/link';
import * as S from './styles';

interface ModalProps {
    isShowingCancel: boolean;
    toggleCancel: () => void;
}

export const CancelBoletoModal: React.FC<ModalProps> = ( { isShowingCancel, toggleCancel } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingCancel && toggleCancel();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingCancel, toggleCancel])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleCancel();
        }
    };

    const handleConfirm = async () => {
      toggleCancel();
    }

    return (
        <>
            {/* <ToastContainer /> */}
            {isShowingCancel ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Cancelar Boleto</S.Title>
                    <S.Divider />
                    <S.Description>
                        Tem certeza que deseja cancelar o boleto?
                    </S.Description>

                    <S.ButtonList>
                        <OutlineButton onClick={toggleCancel} text='Não, voltar' />
                        <Link href="/faturas?popCanceled=true" passHref>
                          <FilledButton onClick={handleConfirm} text='Sim, cancelar' />
                        </Link>
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useCancelProposalModal = () => {
    const [isShowingCancel, setIsShowingCancel] = useState(false);
  
    function toggleCancel() {
      setIsShowingCancel(!isShowingCancel);
    }
  
    return {
      isShowingCancel,
      toggleCancel,
    }
  }

export default CancelBoletoModal;