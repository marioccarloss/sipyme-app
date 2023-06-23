import signinImage from 'assets/images/signin.jpg';
import Auth from 'components/templates/Auth';
import SignupForm from 'components/organisms/auth/SignupForm';

export default function Signup() {
  return <Auth type="Signup" image={signinImage} form={<SignupForm />} />;
}
