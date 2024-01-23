/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */

'use server'

import { getAPIClient } from '@/config/axios';
import { cookies } from 'next/headers';
import { AxiosResponse } from 'axios';
// import { Cookie } from 'next/font/google';
import { Proposta, Propostas } from '@/components/operator/Interfaces/propostas';

interface Response {
  proposalList: Propostas[];
  totalProposals: number;
}

const api = getAPIClient();


export async function getPropostas(pageSize: number, page: number): Promise<Response> {
  try{
    console.log(cookies().toString())
    const response: AxiosResponse<Response> = await api.get('/rh/proposals', {
      // headers: { Cookie: cookies().toString() },
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

export async function getPropostaById(id: string): Promise<Proposta> {
  try{
    console.log(cookies().toString())
    const response: AxiosResponse<Proposta> = await api.get(`/rh/proposals/${id}`, {
      // headers: { Cookie: cookies().toString() },
      });
      return response.data;
  } catch (error) {
    throw error
  }
  
}

// export default class propostasService {
    // static async getPropostas(pageSize: number, page: number): Promise<Propostas[]> {
    //   const response: AxiosResponse<Propostas[]> = await api.get('/rh/proposals', {
    //     headers: { Cookie: cookies().toString() },
    //     params: {
    //       pageSize,
    //       page,
    //     },
    //   });
    //   return response.data;
    // } 

    // static async approveProposta(id: string, approved:boolean): Promise<Propostas> {
    //   const response: AxiosResponse<Propostas> = await api.patch(`/rh/proposals/${id}`, {approved});
    //   return response.data;
    // }

    // static async detalhesProposta (id: string): Promise<detalhesProposta> {
    //   const response: AxiosResponse<detalhesProposta> = await api.get(`/rh/proposals/${id}`);
    //   return response.data;
    // }
// }