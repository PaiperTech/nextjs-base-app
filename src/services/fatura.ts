/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

'use server'

import { Faturas } from '@/components/operator/Interfaces/faturas';
import { getAPIClient } from '@/config/axios';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';


interface Response {
  totalInvoices: number;
  invoiceList: Faturas[];
}

const api = getAPIClient();


export async function getFaturas(pageSize: number, page: number): Promise<Response> {
  try{
    console.log(cookies().toString())
    const response: AxiosResponse<Response> = await api.get('/rh/invoices', {
      params: {
        pageSize,
        page,
        },
      });
      return response.data;
  } catch (error) {
    throw error
  }
}

// export default class faturasService {
//     static async getFaturas(pageSize: number, page: number): Promise<Faturas[]> {
//         const response: AxiosResponse<Faturas[]> = await api.get('/rh/invoices', {
//           params: {
//             pageSize,
//             page,
//           },
//         });
//         return response.data;
//     }

//     static async detalhesFatura (invoiceId: string): Promise<detalhesFatura> {
//         const response: AxiosResponse<detalhesFatura> = await api.get(`/rh/invoices/${invoiceId}`);
//         return response.data;
//     }

//     static async getParcelas (invoiceId: string, pageSize: number, page: number): Promise<Parcelas[]> {
//         const response: AxiosResponse<Parcelas[]> = await api.get(`/rh/invoices/${invoiceId}/employee-installments`, {
//             params: {
//               pageSize,
//               page,
//             },
//           });
//         return response.data;
//     }

// }