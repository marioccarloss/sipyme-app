import { useState, useCallback, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { SignupStep1, SignupStep2, SignupStep3 } from 'types/AuthData';
import { signupRequest } from 'api/auth';
import SignupData from 'types/SignupData';
import useAuthStore from 'store/auth';
import TypeDocument from 'types/TypeDocument';

export default function useSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const paramValue = params.get('step');
  const [step, setStep] = useState<number>(Number(paramValue));
  const [form, setForm] = useState<SignupData>(new SignupData());
  const [errorMessage, setErrorMessage] = useState<string[] | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();
  const [showEnterprise, setShowEnterprise] = useState<string[]>([]);
  const [typeDocument, setTypeDocument] = useState<TypeDocument[]>([]);

  const setSession = useAuthStore((state) => state.setSession);

  const mutation = useMutation(
    (data: SignupStep1 | SignupStep2 | SignupStep3) => signupRequest(data, step)
  );

  const requiredStep1: SignupStep1 = {
    user_email: form.user_email ?? '',
    user_password: form.user_password ?? '',
    user_name: form.user_name ?? '',
    user_last_name: form.user_last_name ?? '',
    user_password_confirmation: form.user_password_confirmation ?? '',
    user_phone: form.user_phone ?? '',
  };

  const requiredStep2: SignupStep2 = {
    user_email: form.user_email ?? '',
    enterprise_name: form.enterprise_name ?? '',
    enterprise_type: form.enterprise_type ?? '',
    enterprise_number_id: form.enterprise_number_id ?? '',
    enterprise_dv: form.enterprise_dv ?? -1,
    enterprise_document_type: form.enterprise_document_type ?? '',
  };

  const formStep1Complete = Object.values(requiredStep1).every(
    (valor) => valor !== '' && valor !== undefined
  );

  const formStep2Complete = Object.values(requiredStep2).some(
    (valor) => valor !== '' && valor !== undefined && valor !== -1
  );

  useEffect(() => {
    const changeStep = (newStep: number) => navigate(`/signup?step=${newStep}`);
    // const changeStep = (newStep: number) => navigate(`/signup?step=${newStep}`);

    if (
      step === 1 &&
      // paramValue === String(step) &&
      mutation.isSuccess &&
      mutation.data?.config.url?.includes('step=1') &&
      formStep1Complete
    ) {
      setTypeDocument(mutation.data.data?.utils?.document_types);
      localStorage.setItem(
        'typeDocument',
        JSON.stringify(mutation.data.data?.utils?.document_types)
      );
      setStep(2);
      changeStep(2);
      setErrorMessage(undefined);
    }

    if (
      step === 2 &&
      // paramValue === String(step) &&
      mutation.isSuccess &&
      mutation.data?.config.url?.includes('step=2') &&
      formStep2Complete
    ) {
      setStep(3);
      changeStep(3);
      setErrorMessage(undefined);
    }

    if (
      step === 3 &&
      // paramValue === String(step) &&
      mutation.isSuccess &&
      mutation.data?.config.url?.includes('step=3')
    ) {
      setStep(4);
      setErrorMessage(undefined);
      setSession(
        true,
        mutation.data.data?.user,
        mutation.data.data?.['X-CSRFToken'],
        mutation.data.data?.['auth-token']
      );
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [
    formStep1Complete,
    formStep2Complete,
    mutation,
    navigate,
    paramValue,
    setSession,
    step,
  ]);

  useEffect(() => {
    if (mutation.isError) {
      setErrorMessage([
        String(
          (mutation?.error as AxiosError<{ message: string }>)?.response?.data
            ?.message
        ),
        String(
          (mutation?.error as AxiosError<{ message: string; error: string[] }>)
            ?.response?.data?.error?.[0]
        ),
      ]);
    }
  }, [mutation?.error, mutation.isError]);

  useEffect(() => {
    if (mutation.isSuccess) {
      setSuccessMessage(mutation.data?.data?.message);
    }
  }, [mutation.data?.data?.message, mutation.isSuccess]);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (step === 1 && formStep1Complete) {
        mutation.mutate(form as SignupStep1);
      }

      if (step === 2 && formStep2Complete) {
        mutation.mutate(form as SignupStep2);
      }

      if (step === 3) {
        // delete form.code_verification;
        mutation.mutate(form as SignupStep3);
      }
    },
    [step, formStep1Complete, formStep2Complete, mutation, form]
  );

  return {
    form,
    setForm,
    setStep,
    step,
    handleSubmit,
    formStep1Complete,
    errorMessage,
    successMessage,
    showEnterprise,
    setShowEnterprise,
    typeDocument,
  };
}
