/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useRouter } from 'next/navigation';
import * as S from './styles';

interface ModalProps {
    isShowingApprove: boolean;
    toggleApprove: () => void;
}

export const ApproveProposalModal: React.FC<ModalProps> = ( { isShowingApprove, toggleApprove } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingApprove && toggleApprove();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingApprove, toggleApprove])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleApprove();
        }
    };

    const router = useRouter();

    const handleConfirm = async () => {
      toggleApprove();
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
            {/* <ToastContainer /> */}
            {isShowingApprove ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Aprovar Proposta</S.Title>
                    <S.Divider />
                    <S.Description>
                        Tem certeza que deseja averbar a proposta?
                    </S.Description>

                    <S.ButtonList>
                        <OutlineButton onClick={toggleApprove} text='Cancelar' />
                        <FilledButton onClick={handleConfirm} text='Confirmar' />
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useApproveProposalModal = () => {
    const [isShowingApprove, setIsShowingApprove] = useState(false);
  
    function toggleApprove() {
      setIsShowingApprove(!isShowingApprove);
    }
  
    return {
      isShowingApprove,
      toggleApprove,
    }
  }

export default ApproveProposalModal;