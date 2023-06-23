import axios from 'axios';
import { getTokenFromStore } from 'store/auth';

const authorizationApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});

authorizationApi.interceptors.request.use((config) => {
  const { token, session } = getTokenFromStore();
  const updatedConfig = { ...config };
  updatedConfig.headers['X-CSRFToken'] = token;
  updatedConfig.headers.Authorization = `Bearer ${session}`;
  return updatedConfig;
});

export default authorizationApi;
