/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import OutlineButton from '@/components/Buttons/OutlineButton';
import FilledButton from '@/components/Buttons/FilledButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { useRouter } from 'next/navigation';
import * as S from './styles';

interface ModalProps {
    isShowingAdd: boolean;
    toggleAdd: () => void;
}

export const AddEmployeeModal: React.FC<ModalProps> = ( { isShowingAdd, toggleAdd } ) => {

    useEffect(() => {
        // eslint-disable-next-line func-names
        const listner = function (e: KeyboardEvent ) {
          if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            e.preventDefault();
            e.stopPropagation();
    
            // eslint-disable-next-line no-unused-expressions
            isShowingAdd && toggleAdd();
          }
        }

        window.addEventListener('keyup', listner)

        return (() => {
          window.removeEventListener('keyup', listner)
        })
    
    }, [isShowingAdd, toggleAdd])

    const handleOverlayClick = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleAdd();
        }
    };

    const router = useRouter();

    const handleConfirm = async () => {
      toggleAdd();
      await router.push('/empresas/analisar');
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
            {isShowingAdd ? <S.Overlay onClick={handleOverlayClick}>
                <S.Wrapper>
                    <S.Title>Retornar Funcionário</S.Title>
                    <S.Divider />
                    <S.Description>
                        Tem certeza que deseja retornar o funcionário à fatura?
                    </S.Description>

                    <S.ButtonList>
                        <OutlineButton onClick={toggleAdd} text='Cancelar' />
                        <FilledButton onClick={handleConfirm} text='Confirmar' />
                    </S.ButtonList>
                </S.Wrapper>
            </S.Overlay> : <S.DisabledOverlay />}
        </>
    );

};


export const useAddEmployeeModal = () => {
    const [isShowingAdd, setIsShowingAdd] = useState(false);
  
    function toggleAdd() {
      setIsShowingAdd(!isShowingAdd);
    }
  
    return {
      isShowingAdd,
      toggleAdd,
    }
  }

export default AddEmployeeModal;