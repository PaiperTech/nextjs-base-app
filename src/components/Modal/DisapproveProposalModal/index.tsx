/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import * as S from './styles';

interface ModalProps {
    isShowingDisapprove: boolean;
    toggleDisapprove: () => void;
}

export const DisapproveProposalModal: React.FC<ModalProps> = ( { isShowingDisapprove, toggleDisapprove } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingDisapprove && toggleDisapprove();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingDisapprove, toggleDisapprove])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleDisapprove();
        }
    };

    const router = useRouter();

    const handleConfirm = async () => {
      toggleDisapprove();
      await router.push('propostas');
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

    return (
        <>
            {isShowingDisapprove ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Reprovar Proposta</S.Title>
                    <S.Divider />
                    <S.Description>
                        Tem certeza que deseja rejeitar a proposta? <br />
                        A proposta será rejeitada e finalizada.
                    </S.Description>
                    <S.SubDivider />

                    <S.InfoWrapper>
                        <S.InfoTitle>Causa da rejeição</S.InfoTitle>
                        <S.DropDown>Selecione</S.DropDown>
                    </S.InfoWrapper>

                    <S.InfoWrapper>
                        <S.InfoTitle>Observações</S.InfoTitle>
                        <S.ObsInput placeholder='Digite suas observações...' />
                    </S.InfoWrapper>

                    <S.ButtonList>
                        <OutlineButton onClick={toggleDisapprove} text='Cancelar' />
                        <FilledButton onClick={handleConfirm} text='Confirmar' />
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useDisapproveProposalModal = () => {
    const [isShowingDisapprove, setIsShowingDisapprove] = useState(false);
  
    function toggleDisapprove() {
      setIsShowingDisapprove(!isShowingDisapprove);
    }
  
    return {
      isShowingDisapprove,
      toggleDisapprove,
    }
  }

export default DisapproveProposalModal;