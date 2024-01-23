/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import * as S from './styles';

export function EditarSubsidiaria() {

      return (
        <S.MainDiv>
            <S.TitleDiv> 
                <S.TitleText>Detalhes da subsidiária</S.TitleText>
            </S.TitleDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>Nome</S.Type>
                    <S.Input type="text" placeholder="Empresa" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>CNPJ</S.Type>
                    <S.Input type="text" placeholder="11.111.111/0001-11" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>E-mail</S.Type>
                    <S.Input type="text" placeholder="lucaspavanelli@gmail.com" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Contato</S.Type>
                    <S.Input type="text" placeholder="+55 11 95922-5555" />
                </S.InformationBox>
            </S.InformationDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>CEP</S.Type>
                    <S.Input type="text" placeholder="04693-190" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Endereço</S.Type>
                    <S.Input type="text" placeholder="Av. Brigadeiro Faria Lima, 1993" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Cidade</S.Type>
                    <S.Input type="text" placeholder="São Paulo" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Bairro</S.Type>
                    <S.Input type="text" placeholder="Jardim Paulistano" />
                </S.InformationBox>
            </S.InformationDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>Complemento</S.Type>
                    <S.Input type="text" placeholder="Conjunto F13" />
                </S.InformationBox>
            </S.InformationDiv>
        </S.MainDiv>
      );
}

export default EditarSubsidiaria;