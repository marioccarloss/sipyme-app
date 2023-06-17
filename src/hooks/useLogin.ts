import { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import loginRequest from 'api/auth';
import useAuthStore from 'store/auth';
import { LoginData } from 'types/LoginData';

export default function useLogin() {
  const navigate = useNavigate();

  const initialState = useMemo(
    () => ({
      email: '',
      password: '',
      rememberMe: false,
    }),
    []
  );

  const [form, setForm] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');

  const loginData: LoginData = {
    user_email: form.email,
    user_password: form.password,
    remember_me: form.rememberMe ? 1 : 0,
  };

  const {
    data: dataLogin,
    refetch: refetchLogin,
    isFetching: isFetchingLogin,
  } = useQuery(['UserSession'], async () => loginRequest(loginData), {
    enabled: false,
  });

  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    if (dataLogin) {
      try {
        delete dataLogin?.data.user.password;

        if (dataLogin?.status === 200) {
          setSession(
            true,
            dataLogin?.data.user,
            dataLogin.data?.['X-CSRFToken']
          );
          setForm(initialState);
          navigate('/');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const { response } = error;
          if (response?.status === 401) {
            setErrorMessage(`Error de autenticación ${response?.data?.error}`);
          } else {
            setErrorMessage(`Error en la solicitud ${response?.statusText}`);
          }
        } else {
          setErrorMessage(`Error en la solicitud ${(error as Error).message}`);
        }
      }
    }
  }, [dataLogin, initialState, navigate, setSession]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      refetchLogin();
    },
    [refetchLogin]
  );

  return {
    form,
    setForm,
    handleSubmit,
    errorMessage,
    isFetchingLogin,
  };
}
