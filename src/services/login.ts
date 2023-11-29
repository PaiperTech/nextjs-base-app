import { getAPIClient } from '@/config/axios';

interface SendOtp {
  email: string;
  sendOtpChannel: string;
}

interface SendOtp {
  maskedPhone: string;
}

const api = getAPIClient();

export const sendOtp = async (body: SendOtp): Promise<SendOtp> => {
  try {
    const { data } = await api.post<SendOtp>('/admin/send-otp', body);

    return data;
  } catch (error: any) {
    throw error;
  }
};
