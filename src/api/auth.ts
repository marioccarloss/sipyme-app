import axios from 'axios';
import { LoginData } from 'types/LoginData';

const loginRequest = async (data: LoginData) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/api/auth/sign_in`, data);
};

export default loginRequest;
