/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import * as S from './styles';

export function FaturasTable() {
    const dados = [
        { empresa: 'Empresa', data: '31/10/2023', valortotal: 'R$18.000,00', valorfuncionario: 'R$600,00' }]
      return (
          <S.StyledTable>
            <thead>
                    <S.StyledTr>
                    <S.StyledTdTitle colSpan={4}>Detalhes da Fatura</S.StyledTdTitle>
                    </S.StyledTr>
                    <S.StyledTr>
                    <S.StyledTh>Empresa</S.StyledTh>
                    <S.StyledTh>Data</S.StyledTh>
                    <S.StyledTh>Valor Total</S.StyledTh>
                    <S.StyledTh>Valor por Funcionário</S.StyledTh>
                    </S.StyledTr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <S.StyledTr key={index}>
                    {/* <S.StyledTdTest /> */}
                    <S.StyledTd>{item.empresa}</S.StyledTd>
                    <S.StyledTd>{item.data}</S.StyledTd>
                    <S.StyledTd>{item.valortotal}</S.StyledTd>
                    <S.StyledTd>{item.valorfuncionario}</S.StyledTd>
                    </S.StyledTr>
                ))}
            </tbody>
            <tfoot>
                <S.StyledTdTest />
            </tfoot>
        </S.StyledTable>
      );
}

export default FaturasTable;