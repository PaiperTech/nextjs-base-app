/* eslint-disable import/prefer-default-export */
export const formatDateHelper = (data: Date) => { 
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
}