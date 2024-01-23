/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { detalhesSubsidiaria } from '@/services/subsidiaria';
import DetailButton from "@/components/Buttons/DetailButton";
import { useRouter } from 'next/navigation';
import { parseCookies, setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { DetalhesSubsidiaria } from '../operator/Interfaces/subsidiaria';

function extractProposalId(inputString: string): string {
    const startIndex = inputString.indexOf('?');
  
    if (startIndex !== -1) {
      const proposalId = inputString.substring(startIndex + '?'.length);
      return proposalId;
    }
  
    return ''; // Return null if the substring is not found
  }

export function DetalheSubsidiaria() {

    const router = useRouter();
    const {id} = parseCookies();

    const [detalhes, setDetalhes] = useState<DetalhesSubsidiaria>();
    const [reloader] =useState(false);

    const handleEditClick = () => {
        setCookie(null, 'id', JSON.stringify(id));
        router.push('editarSubsidiarias');
    };

    useEffect(() => {
        const fetchDetalhes = async () => {
            try {
                const detalhesResult = await detalhesSubsidiaria(extractProposalId(window.location.href));
                setDetalhes(detalhesResult);
            } catch (error) {
                console.error('Erro ao obter detalhes da subsidiária:', error);
            }
        };
        fetchDetalhes();
    }, [reloader]);

          return (
        <S.MainDiv>
            <S.TitleDiv> 
                <S.TitleText>Detalhes da subsidiária</S.TitleText>
                <DetailButton type="edit" text="Editar informações" onClick={handleEditClick}/>
            </S.TitleDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>Nome</S.Type>
                    <S.Name>{detalhes?.name}</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>CNPJ</S.Type>
                    <S.Name>{detalhes?.cnpj}</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>E-mail</S.Type>
                    <S.Name>lucaspavanelli@gmail.com</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Contato</S.Type>
                    <S.Name>99524-6171</S.Name>
                </S.InformationBox>
            </S.InformationDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>CEP</S.Type>
                    <S.Name>04693-190</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Endereço</S.Type>
                    <S.Name>Av. Brigadeiro Faria Lima, 1993</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Cidade</S.Type>
                    <S.Name>{detalhes?.city}</S.Name>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Bairro</S.Type>
                    <S.Name>Jardim Paulistano</S.Name>
                </S.InformationBox>
            </S.InformationDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>Complemento</S.Type>
                    <S.Name>Conjunto F13</S.Name>
                </S.InformationBox>
            </S.InformationDiv>
        </S.MainDiv>
      );
}

export default DetalheSubsidiaria;