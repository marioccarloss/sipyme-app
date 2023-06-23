import { Link } from 'react-router-dom';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Checkbox from 'components/atoms/Checkbox';
import Button from 'components/atoms/Button';
import useSignin from 'hooks/useSignin';
import Alert from 'components/atoms/Alert';
import Spinner from 'components/atoms/Spinner';

export default function SigninForm() {
  const {
    form,
    setForm,
    handleSubmit,
    isFetchingLogin,
    showErrorMessage,
    errorMessage,
  } = useSignin();

  return (
    <div className="w-full sm:max-w-md md:mt-0 xl:p-0">
      <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Tu email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="nombre@empresa.com"
              required
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              autoComplete="password"
              required
              value={form.password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Checkbox
              id="remember"
              label="Recuérdame"
              checked={form.rememberMe}
              onChange={(event) =>
                setForm({ ...form, rememberMe: event.target.checked })
              }
            />
            <Link
              to="/forgot-password"
              className="hidden text-sm font-medium text-primary-600 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button type="submit">
            {!isFetchingLogin ? <span>Iniciar sesión</span> : <Spinner />}
          </Button>
          <p className="text-sm font-light text-gray-500">
            ¿No tienes cuenta aún?{' '}
            <Link
              to="/signup?step=1"
              className="font-medium text-primary-600 hover:underline"
            >
              Regístrate
            </Link>
          </p>
          {errorMessage && showErrorMessage && <Alert message={errorMessage} />}
        </form>
      </div>
    </div>
  );
}
