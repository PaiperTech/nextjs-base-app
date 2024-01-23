/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import * as S from './styles';

export function InputSearch() {

    return (
        <S.Wrapper>
            <S.SearchIcon src="/assets/icons/search.svg"/>
            <S.SearchText placeholder="Pesquisar por..."/>
        </S.Wrapper>

    );

}

export default InputSearch;