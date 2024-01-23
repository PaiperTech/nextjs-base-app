/* eslint-disable import/extensions */

'use server'

import { getAPIClient } from '@/config/axios';
import { AxiosResponse } from 'axios';

// eslint-disable-next-line no-unused-vars
interface IsendOtp {
    email: string;
}

interface responseOtp {
    maskedEmail: string;
}

interface validateOtp {
    otpToken: string;
    email: string;
}

const api = getAPIClient();

export async function sendOtp(data:IsendOtp): Promise<responseOtp> {
    const response: AxiosResponse<responseOtp> = await api.post('/rh/send-otp', 
        data
    );
return response.data;
}

export async function validationOtp(data: validateOtp) {
            const response: AxiosResponse = await api.post('/rh/validate-otp',
                data
            );
        return response.data;
        }

// export default class loginService{
//     public static async sendOtp(data:sendOtp): Promise<responseOtp> {
//         const response: AxiosResponse<responseOtp> = await api.post('/rh/send-otp', 
//             data
//         );
//     return response.data;
//     }

//     public static async validationOtp(data: validateOtp) {
//         const response: AxiosResponse = await api.post('/rh/validate-otp',
//             data
//         );
//     return response.data;
//     }
// }