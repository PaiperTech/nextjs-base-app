/* eslint-disable import/prefer-default-export */
import axios from 'axios';
// import { redirect } from 'next/navigation';

export function getAPIClient() {
  // const baseURL = process.env.NEXT_PUBLIC_SAHCRED_BASE_URL;
  const baseURL = 'https://api.prestocred.com.br';
  const api = axios.create({
    headers: { Cookie: '	access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5Z2RhYmY1OS00MGMxLTQ1MjAtOWVlZi00ZWUyODU2MGRlMjYiLCJ1c2VyUm9sZSI6InJoIiwiaWF0IjoxNzA2MDA3NDU3LCJleHAiOjE3MDYwMjU0NTd9.RqM7gM95Za8fYj-_Y_kh7Pyx73ATrxCPSAkpT6Ini0A; Domain=.prestocred.com.br; Path=/; HttpOnly; Secure;'
  }, 
    baseURL,
    withCredentials: true,
  });
  
  // api.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error?.response?.status === 401) {
  //       redirect('/login');  
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return api;
}
