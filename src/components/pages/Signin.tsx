import signinImage from 'assets/images/signin.jpg';
import SigninForm from 'components/organisms/auth/SigninForm';
import Auth from 'components/templates/Auth';

export default function Signin() {
  return <Auth type="Signin" image={signinImage} form={<SigninForm />} />;
}
