import { ChangeEvent } from 'react';
import useSignup from 'hooks/useSignup';

export default function useSignupForm() {
  const {
    form,
    setForm,
    handleSubmit,
    step,
    setStep,
    errorMessage,
    successMessage,
    showEnterprise,
    setShowEnterprise,
    typeDocument,
  } = useSignup();

  type SignupField = {
    index: number;
    label: string;
    type: string;
    name: string;
    id: string;
    value: string;
    show: boolean;
    pattern?: string;
    maxLength?: number;
    onChange: (event: any) => void;
    options?: any;
  };

  type SignupFormInput = {
    placeholder: string;
    autoComplete?: string;
    required?: boolean;
  } & SignupField;

  type SignupForm = {
    title: string;
    button: string;
    step: number;
    inputs: SignupFormInput[];
    radios: SignupField[];
    selects: SignupField[];
  };

  const signupForm: SignupForm[] = [
    {
      title: 'Registra tu usuario',
      button: 'Siguiente: Registra tu empresa',
      step: 1,
      inputs: [
        {
          index: 1.1,
          label: 'Tu email',
          type: 'email',
          name: 'email',
          id: 'email',
          placeholder: 'nombre@email.com',
          value: form.user_email ?? '',
          pattern: '^[\\s\\S]*$',
          show: true,
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, user_email: event.target.value }),
        },
        {
          index: 1.2,
          label: 'Nro. de móvil',
          type: 'phone',
          name: 'phone',
          id: 'phone',
          placeholder: 'Ingresa nro. de móvil',
          value: form.user_phone ?? '',
          show: true,
          pattern: '^[0-9]+$',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, user_phone: event.target.value }),
        },
        {
          index: 1.3,
          label: 'Tu nombre',
          type: 'text',
          name: 'name',
          id: 'name',
          placeholder: 'Ingresa tu primer nombre',
          value: form.user_name ?? '',
          show: true,
          pattern: '^[A-Za-z\\s]+$',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, user_name: event.target.value }),
        },
        {
          index: 1.4,
          label: 'Tu apellido',
          type: 'text',
          name: 'lastName',
          id: 'lastName',
          placeholder: 'Ingresa tu primer apellido',
          value: form.user_last_name ?? '',
          show: true,
          pattern: '^[\\s\\S]+$',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, user_last_name: event.target.value }),
        },
        {
          index: 1.5,
          label: 'Contraseña',
          type: 'password',
          name: 'password',
          id: 'password',
          placeholder: '••••••••',
          autoComplete: 'password',
          required: true,
          show: true,
          pattern: '^[\\s\\S]*$',
          value: form.user_password ?? '',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, user_password: event.target.value }),
        },
        {
          index: 1.6,
          label: 'Confirma tu contraseña',
          type: 'password',
          name: 'confirmPassword',
          id: 'confirmPassword',
          placeholder: '••••••••',
          autoComplete: 'password',
          required: true,
          show: true,
          pattern: '^[\\s\\S]*$',
          value: form.user_password_confirmation ?? '',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({
              ...form,
              user_password_confirmation: event.target.value,
            }),
        },
      ],
      radios: [],
      selects: [],
    },
    {
      title: 'Registra tu empresa',
      button: 'Siguiente: Verifica tu email',
      step: 2,
      selects: [
        {
          index: 2.0,
          label: 'Tipo de documento',
          type: 'select',
          name: 'typeDocument',
          id: 'typeDocument',
          value: form.enterprise_document_type ?? '',
          show: true,
          pattern: '^[\\s\\S]*$',
          onChange: (event: ChangeEvent<HTMLSelectElement>) =>
            setForm({ ...form, enterprise_document_type: event.target.value }),
          options: typeDocument,
        },
      ],
      inputs: [
        {
          index: 2.1,
          label: 'Número de Id',
          type: 'text',
          name: 'enterpriseNumberId',
          id: 'enterpriseNumberId',
          placeholder: 'Ingresa nro. de Id de tu empresa',
          value: form.enterprise_number_id ?? '',
          show: showEnterprise.includes('enterpriseNumberId'),
          pattern: '^[\\s\\S]*$',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, enterprise_number_id: event.target.value }),
        },
        {
          index: 2.2,
          label: 'Nombre de la empresa',
          type: 'text',
          name: 'enterpriseName',
          id: 'enterpriseName',
          placeholder: 'Ingresa el nombre de tu empresa',
          value: form.enterprise_name ?? '',
          show: showEnterprise.includes('enterpriseName'),
          pattern: '^[A-Za-z\\s]+$',
          onChange: (event: ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, enterprise_name: event.target.value }),
        },
        {
          index: 2.3,
          label: 'Dígito de verificación de tu empresa',
          type: 'text',
          name: 'enterpriseDv',
          id: 'enterpriseDv',
          placeholder: 'Ingresa dígito de verificación de tu empresa',
          value:
            form.enterprise_dv !== undefined ? String(form.enterprise_dv) : '',
          show: showEnterprise.includes('enterpriseDv'),
          pattern: '^[0-9]$',
          maxLength: 1,
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            const newValue = Number.isNaN(Number(value)) ? 0 : Number(value);
            setForm({
              ...form,
              enterprise_dv: newValue,
            });
          },
        },
      ],
      radios: [
        {
          index: 1,
          label: 'Empresa Natural',
          type: 'radio',
          name: 'enterpriseType',
          id: 'natural_person',
          value: 'natural_person',
          show: true,
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            setForm({
              ...form,
              enterprise_type: event.target.value,
            });
            setShowEnterprise(['enterpriseNumberId']);
          },
        },
        {
          index: 2,
          label: 'Empresa Jurídica',
          type: 'radio',
          name: 'enterpriseType',
          id: 'legal_person',
          value: 'legal_person',
          show: true,
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            setForm({
              ...form,
              enterprise_type: event.target.value,
            });
            setShowEnterprise([
              'enterpriseNumberId',
              'enterpriseName',
              'enterpriseDv',
            ]);
          },
        },
      ],
    },
    {
      title: 'Verifica tu correo',
      button: 'Verificar',
      step: 3,
      inputs: [
        {
          index: 1,
          label: 'Verifíca tu correo',
          type: 'text',
          name: 'codeVerification',
          id: 'codeVerification',
          placeholder: 'Ingresa tu código de verificación',
          value:
            form.code_verification !== undefined
              ? String(form.code_verification)
              : '',
          show: true,
          pattern: '^[0-9]+$',
          onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            const newValue = Number.isNaN(Number(value)) ? 0 : Number(value);
            setForm({ ...form, code_verification: newValue });
          },
        },
      ],
      radios: [],
      selects: [],
    },
  ];

  const hasManyInputs = signupForm
    ?.filter((item) => item.step === step)
    ?.map((item) => item.inputs.length > 1)[0];

  const hasManyRadios = signupForm
    ?.filter((item) => item.step === step)
    ?.map((item) => item.radios.length > 1)[0];

  const buttons = ['Registra tu usuario', 'Registra tu empresa', 'Finalizar'];

  const buttonName = buttons[step - 1];

  return {
    signupForm,
    handleSubmit,
    step,
    setStep,
    hasManyInputs,
    hasManyRadios,
    buttonName,
    errorMessage,
    successMessage,
    showEnterprise,
  };
}
