/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import * as S from './styles';

export function InputSelectMain() {

    return (
        <S.Wrapper>
            <S.SearchIcon src="/assets/icons/search.svg"/>
            <S.SearchText placeholder="Selecione"/>
        </S.Wrapper>

    );

}

export default InputSelectMain;