/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/display-name */
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {sendOtp, validationOtp} from '@/services/loginRh';
import { destroyCookie, parseCookies } from 'nookies';
import * as S from './styles';

interface VerificationBoxProps {
  // eslint-disable-next-line no-unused-vars
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextInput: () => void;
  onPreviousInput: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  ref: React.Ref<HTMLInputElement>;
}


export const VerificationBox: React.FC<VerificationBoxProps> = React.forwardRef<HTMLInputElement, VerificationBoxProps>(
    ({ onInput, onNextInput, onPreviousInput }, ref) => (
      <S.VerificationBox
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Backspace' && e.currentTarget.value === '') {
            e.preventDefault();
            onPreviousInput();
          }
        }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          const numericValue = e.currentTarget.value.replace(/[^0-9]/g, '');
  
          if (numericValue.length > 0) {
            e.currentTarget.value = numericValue;
            onInput(e);
            onNextInput();
          } else {
            e.currentTarget.value = ''; // Limpa o valor se não for um número
          }
        }}
        maxLength={1}
      />
    )
  );

const ModalEmailVerification: React.FC = () => {
  const {email} = parseCookies();
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState<string>('');
  const verificationBoxRefs = Array.from({ length: 6 }, () => useRef<HTMLInputElement>(null));
  
  const handleNextInput = (currentIndex: number) => {
    const nextIndex = currentIndex < 5 ? currentIndex + 1 : 5;

    if (verificationBoxRefs[nextIndex] !== null && verificationBoxRefs[nextIndex].current !== null) {
      (verificationBoxRefs[nextIndex].current as HTMLInputElement).focus();
    }
  };
  
  const handlePreviousInput = (currentIndex: number) => {
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;

    if (verificationBoxRefs[previousIndex] !== null && verificationBoxRefs[previousIndex].current !== null) {
      (verificationBoxRefs[previousIndex].current as HTMLInputElement).focus();
    }
  };
    
  const handleVerificationButtonClick = async () => {
    if (verificationCode.length === 6) {
      console.log('Código de verificação completo:', verificationCode);
    }
    console.log(email)
    console.log(verificationCode)
    try {
      await validationOtp({
        email: email.replace(/^"|"$/g, ''),
        otpToken: verificationCode
      });
      router.push('propostas')
    } catch (err) {
        console.log('Validação falhou. Por favor, tente novamente.');
    }
  };

  useEffect(() => {
    const isCodeComplete = verificationBoxRefs.every((ref) => ref.current && ref.current.value !== '');

    if (isCodeComplete) {
      setVerificationCode(verificationBoxRefs.map((ref) => ref.current?.value).join(''));
    }
  }, [verificationBoxRefs]);

  const handleLogin = async () => {
    try {
        await sendOtp({ email: email.replace(/^"|"$/g, '') });
    } catch (err) {
        console.log('Reenviar código falhou. Por favor, tente novamente.');
    }
  };

  const handleBack = () => {
    destroyCookie(undefined, 'email')
    router.push('login');
  }

  return (
    // <S.MainWrapper>
      <S.VerificationWrapper>
        <S.VerificationText>
          <S.VerificationTextUp>Verificação</S.VerificationTextUp>
          <S.VerificationTextMid>Digite abaixo o código enviado para o e-mail</S.VerificationTextMid>
          <S.VerificationTextDown>{email}</S.VerificationTextDown>
          </S.VerificationText>
        <S.VerificationDiv>
          <S.VerificationContainer>
            {[...Array(6)].map((_, index) => (
              <VerificationBox
                key={index}
                ref={verificationBoxRefs[index]}
                onNextInput={() => handleNextInput(index)}
                onPreviousInput={() => handlePreviousInput(index)}
                onInput={(e) => {
                  const {value} = e.currentTarget;
                  setVerificationCode((prev) => {
                    const newCode = prev.slice(0, index) + value + prev.slice(index + 1);
                    return newCode.trim();
                  });
                
                  if (value === '' && index > 0) {
                    handlePreviousInput(index);
                  } else if (value !== '' && index < 5) {
                    handleNextInput(index);
                  }
                }}
              />
            ))}
          </S.VerificationContainer>
          <S.VerificationButton
            onClick={handleVerificationButtonClick}
            disabled={verificationCode.replace(/ /g, '').length !== 6}
          >
            Entrar
          </S.VerificationButton>
          <S.VerificationButtonBack onClick={handleBack}>Voltar</S.VerificationButtonBack>
          <S.NotRecievedText>Não recebeu seu código de verificação?</S.NotRecievedText>
          <S.NotRecievedEmail
            onClick={handleLogin}
          >
            Reenviar Código.</S.NotRecievedEmail>
        </S.VerificationDiv>
      </S.VerificationWrapper>
    // </S.MainWrapper>
  );
};

export default ModalEmailVerification;
