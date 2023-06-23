export default class SignupData {
  user_email?: string;

  user_password?: string;

  user_name?: string;

  user_last_name?: string;

  user_password_confirmation?: string;

  user_phone?: string;

  enterprise_type?: string;

  enterprise_name?: string;

  enterprise_number_id?: string;

  enterprise_dv?: number;

  code_verification?: number;

  enterprise_document_type?: string;

  constructor(other?: SignupData) {
    if (other) {
      this.user_email = other.user_email;
      this.user_password = other.user_password;
      this.user_name = other.user_name;
      this.user_last_name = other.user_last_name;
      this.user_password_confirmation = other.user_password_confirmation;
      this.user_phone = other.user_phone;
      this.enterprise_type = other.enterprise_type;
      this.enterprise_name = other.enterprise_name;
      this.enterprise_number_id = other.enterprise_number_id;
      this.enterprise_dv = other.enterprise_dv;
      this.code_verification = other.code_verification;
      this.enterprise_document_type = other.enterprise_document_type;
    }
  }
}
