type UserEmail = {
  user_email: string;
};

type UserPassword = {
  user_password: string;
};

export type SigninData = UserEmail &
  UserPassword & {
    remember_me: number;
  };

export type SignupStep1 = UserEmail &
  UserPassword & {
    user_name: string;
    user_last_name: string;
    user_password_confirmation: string;
    user_phone: string;
  };

export type SignupStep2 = UserEmail & {
  enterprise_type: string;
  enterprise_name: string;
  enterprise_number_id: string;
  enterprise_dv: number;
  enterprise_document_type: string;
};

export type SignupStep3 = SignupStep1 & SignupStep2;
