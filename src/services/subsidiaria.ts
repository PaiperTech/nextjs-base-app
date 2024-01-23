/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */

'use server'

import { AtualizarSubsidiaria, CriarSubsidiaria, DetalhesSubsidiaria, Subsidiarias } from '@/components/operator/Interfaces/subsidiaria';
import { getAPIClient } from '@/config/axios';
import { AxiosResponse } from 'axios';
import { cookies } from 'next/headers';

interface Response{
  totalSubsidiaries: number;
  subsidiaryList: Subsidiarias[];
}

const api = getAPIClient();

export async function getSubsidiarias(pageSize: number, page: number): Promise<Response> {
    try{
      console.log(cookies().toString())
      const response: AxiosResponse<Response> = await api.get('/rh/subsidiary', {
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


  export async function criarSubsidiaria(data: CriarSubsidiaria): Promise<Subsidiarias> {
    try{
      const response: AxiosResponse<Subsidiarias> = await api.post(`/rh/subsidiary`, 
            data
        );
        return response.data;
    } catch (error) {
      throw error
    }
  }

  export async function detalhesSubsidiaria (subsidiaryId: string): Promise<DetalhesSubsidiaria> {
    try{
        const response: AxiosResponse<DetalhesSubsidiaria> = await api.get(`/rh/subsidiary/${subsidiaryId}`);
        return response.data;
    } catch (error) {
        throw error
    } 
  }

  export async function atualizarSubsidiaria (subsidiaryId: string, data:AtualizarSubsidiaria): Promise<DetalhesSubsidiaria> {
    try{
        const response: AxiosResponse<DetalhesSubsidiaria> = await api.put(`/rh/subsidiary/${subsidiaryId}`,
            data
        );
        return response.data;
    } catch (error) {
        throw error
    } 
  }