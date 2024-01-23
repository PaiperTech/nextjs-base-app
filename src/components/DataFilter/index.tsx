/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import * as S from './styles';

export function InputSearch() {

    return (
        <S.Wrapper>
            <S.WrapperStatus>
                {/* <S.SearchIcon src="/assets/icons/search.svg"/> */}
                <S.SearchText placeholder="Status"/>
            </S.WrapperStatus>
            <S.WrapperAno>
                {/* <S.SearchIcon src="/assets/icons/search.svg"/> */}
                <S.SearchText placeholder="Ano"/>
            </S.WrapperAno>
            <S.WrapperMes>
                {/* <S.SearchIcon src="/assets/icons/search.svg"/> */}
                <S.SearchText placeholder="Mês"/>
            </S.WrapperMes>
        </S.Wrapper>
        

    );

}

export default InputSearch;