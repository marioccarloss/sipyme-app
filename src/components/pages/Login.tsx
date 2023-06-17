import Logo from 'components/atoms/Logo';
import LoginForm from 'components/organisms/login/LoginForm';

export default function Login() {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[100dvh] lg:py-0">
        <div className="mb-6">
          <Logo />
        </div>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
