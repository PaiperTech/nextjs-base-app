/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import {sendOtp} from '@/services/loginRh';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import * as S from './styles';


const ModalLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const [failedRequest, setFailedRequest] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const isEmailValid = (aEmail: string): boolean => {
      // Expressão regular para verificar se o e-mail é válido.
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(aEmail);
    };

    const handleLogin = async () => {
        try {
            await sendOtp({ email });
            const emailJSON = JSON.stringify(email);
            setCookie(undefined, 'email' , emailJSON);

            router.push('verification')
        } catch (err) {
            console.log('Login falhou. Por favor, tente novamente.');
            setFailedRequest(true);
            setEmail('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleLogin();
        }
      };

    return (
    //    <S.MainWrapper>
            <S.LoginWrapper>
                <S.LoginText>
                    <S.LoginTextUp>
                        Bem-vindo a Empresa!
                    </S.LoginTextUp>
                    <S.LoginTextDown>
                        Digite seu e-mail abaixo para entrar no portal!
                    </S.LoginTextDown>
                </S.LoginText>
                <S.LoginBox>
                    <S.EmailAndWarningWrapper>
                        <S.LoginBoxText>
                            E-mail
                        </S.LoginBoxText>
                        <S.WarningWrapper>
                            <S.WarningImage show={failedRequest} src='/assets/icons/error_icon.svg' />
                            <S.WarningText show={failedRequest}>Digite um e-mail válido</S.WarningText>
                        </S.WarningWrapper>
                    </S.EmailAndWarningWrapper>
                    <S.LoginBoxEmail
                        placeholder="E-mail"
                        type="text"
                        id="campoTexto"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        onKeyDown={handleKeyPress}
                        isRed={failedRequest}
                    />
                    <S.LoginButton disabled={!isEmailValid(email)} onClick={handleLogin}>
                        Continuar
                    </S.LoginButton>
                </S.LoginBox>
            </S.LoginWrapper>
    //    </S.MainWrapper>
    )

}

export default ModalLogin;
