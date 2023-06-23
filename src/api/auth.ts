import axios from 'axios';
import {
  SigninData,
  SignupStep1,
  SignupStep2,
  SignupStep3,
} from 'types/AuthData';

export const signinRequest = async (data: SigninData) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/auth/sign_in`, data);
};

export const signupRequest = async (
  data: SignupStep1 | SignupStep2 | SignupStep3,
  step: number
) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/api/auth/sign_up?step=${step}`,
    data
  );
};
