/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ActionButton from '@/components/Buttons/ActionButton';
import * as S from './styles';

interface PopUpProps {
  text: string;
  onClose: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({ text, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

  
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    isVisible && (
      <S.Wrapper isVisible={isVisible}>
        <S.GreenLine />
        <S.SubWrapper>
          <S.LeftWrapper>
            <S.PopIconConfirm src='/assets/icons/confirmation.svg' />
            <S.PopTextWrapper>
              <S.PopText>Parabéns!</S.PopText>
              <S.PopText>{text}</S.PopText>
            </S.PopTextWrapper>
          </S.LeftWrapper>
          <ActionButton type="delete-gray" onClick={handleClose} />
        </S.SubWrapper>
      </S.Wrapper>
    )
  );
};

export default PopUp;
