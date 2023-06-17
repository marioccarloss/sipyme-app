import axios from 'axios';

const authorizationApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});

authorizationApi.interceptors.request.use((config) => {
  const updatedConfig = { ...config };
  updatedConfig.headers['X-CSRFToken'] = 'csrftoken';
  return updatedConfig;
});
