import { useEffect, useState, useMemo, useCallback } from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signinRequest } from 'api/auth';
import useAuthStore from 'store/auth';
import { SigninData } from 'types/AuthData';

export default function useSignin() {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  const initialState = useMemo(
    () => ({
      email: '',
      password: '',
      rememberMe: false,
    }),
    []
  );

  const [form, setForm] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [sendCredentials, setSendCredentials] = useState(false);

  const loginData: SigninData = {
    user_email: form.email,
    user_password: form.password,
    remember_me: form.rememberMe ? 1 : 0,
  };

  const {
    data: dataLogin,
    isFetching: isFetchingLogin,
    isSuccess: isSuccessLogin,
    isError: isErrorLogin,
    error: loginError,
  } = useQuery(['UserSession'], async () => signinRequest(loginData), {
    staleTime: Infinity,
    enabled: !!sendCredentials,
  });

  useEffect(() => {
    if (dataLogin) {
      delete dataLogin?.data.user.password;

      if (isSuccessLogin) {
        setSession(
          true,
          dataLogin?.data.user,
          dataLogin.data?.['X-CSRFToken'],
          dataLogin.data?.['auth-token']
        );
        setForm(initialState);
        navigate('/');
      }
    }
    if (isErrorLogin) {
      setShowErrorMessage(true);
      setErrorMessage(
        (loginError as AxiosError<{ message: string }>)?.response?.data?.message
      );
    }

    setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
  }, [
    dataLogin,
    initialState,
    isErrorLogin,
    isSuccessLogin,
    loginError,
    navigate,
    setSession,
  ]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSendCredentials(true);
    },
    []
  );

  return {
    form,
    setForm,
    handleSubmit,
    errorMessage,
    showErrorMessage,
    isFetchingLogin,
  };
}
