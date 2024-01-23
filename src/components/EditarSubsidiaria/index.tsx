/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { useRouter } from 'next/navigation';
import DetailButton from "@/components/Buttons/DetailButton";
import { parseCookies } from 'nookies';
import * as S from './styles';

export function EditarSubsidiaria() {

    const router = useRouter();
    const { editData } = parseCookies();
    // eslint-disable-next-line no-unused-vars
    const { nome = '', cnpj = '', usuarios = '', contato = '' } = editData ? JSON.parse(editData) : {};

      return (
        <S.MainDiv>
            <S.TitleDiv> 
                <S.TitleText>Detalhes da subsidiária</S.TitleText>
                <S.ButtonDiv>
                    <DetailButton type="cancel" text="Cancelar" onClick={() => router.push('detalhesSubsidiarias')}/>
                    <DetailButton type="save" text="Salvar informações"/>
                </S.ButtonDiv>
            </S.TitleDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>Nome</S.Type>
                    <S.Input type="text" placeholder="Empresa" value={nome} />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>CNPJ</S.Type>
                    <S.Input type="text" placeholder="11.111.111/0001-11" value={cnpj}/>
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>E-mail</S.Type>
                    <S.Input type="text" placeholder="examplo@gmail.com" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Contato</S.Type>
                    <S.Input type="text" placeholder="+55 11 12345-6789" value={contato}/>
                </S.InformationBox>
            </S.InformationDiv>
            <S.InformationDiv> 
                <S.InformationBox>
                    <S.Type>CEP</S.Type>
                    <S.Input type="text" placeholder="12345-678" />
                </S.InformationBox>
                <S.InformationBox>
                    <S.Type>Endereço</S.Type>
                    <S.Input type="text" placeholder="Avenida, 123" />
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