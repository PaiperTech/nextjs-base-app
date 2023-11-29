'use server';

import { getAPIClient } from '@/config/axios';
import { cookies } from 'next/headers';

const api = getAPIClient();

export async function deleteOperatorById(id: string): Promise<void> {
  try {
    await api.delete(`/operator/${id}`, {
      headers: { Cookie: cookies().toString() },
    });
  } catch (error: any) {
    throw error;
  }
}
