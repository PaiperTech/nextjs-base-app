import axios from 'axios';
import { redirect } from 'next/navigation';

export function getAPIClient() {
  const baseURL = process.env.NEXT_PUBLIC_SAHCRED_BASE_URL;
  const api = axios.create({
    baseURL,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        redirect('/login');
      }
      return Promise.reject(error);
    }
  );

  return api;
}
