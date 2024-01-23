/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */

'use server'

import { DemissaoFuncionario, DetalhesFuncionario, Funcionarios, LicencaFuncionario } from '@/components/operator/Interfaces/funcionarios';
import { getAPIClient } from '@/config/axios';
import { AxiosResponse } from 'axios';

interface Response {
  totalEmployees: number;
  employeeList: Funcionarios[];
}

const api = getAPIClient();

export async function getFuncionarios(pageSize: number, page: number): Promise<Response> {
  try{
    const response: AxiosResponse<Response> = await api.get('/rh/employee', {
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

export async function detalhesFuncionario (id: string): Promise<DetalhesFuncionario> {
  try{
    const response: AxiosResponse<DetalhesFuncionario> = await api.get(`/rh/employee/${id}`);
    return response.data;
  } catch (error) {
    throw error
  }
}

export async function licence(id: string, data:LicencaFuncionario): Promise<Funcionarios> {
  try{
    const response: AxiosResponse<Funcionarios> = await api.post(`/rh/employee/${id}/licence`,
      data
    );
    return response.data;
  } catch (error) {
    throw error
  }
}

export async function demission(id: string, data:DemissaoFuncionario): Promise<Funcionarios>{
  try{
    const response: AxiosResponse<Funcionarios> = await api.post(`/rh/employee/{id}/demission`,
    data
  );
  return response.data;
  } catch (error) {
    throw error
  }
}
