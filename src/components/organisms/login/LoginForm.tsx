import { Link } from 'react-router-dom';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Checkbox from 'components/atoms/Checkbox';
import Button from 'components/atoms/Button';
import useLogin from 'hooks/useLogin';

export default function LoginForm() {
  const { form, setForm, handleSubmit, isFetchingLogin } = useLogin();

  return (
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
          onChange={(event) => setForm({ ...form, email: event.target.value })}
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
          className="text-sm font-medium text-primary-600 hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <Button type="submit">
        {!isFetchingLogin ? <span> Iniciar sesión</span> : <span>Loading</span>}
      </Button>
      <p className="text-sm font-light text-gray-500">
        ¿No tienes cuenta aún?{' '}
        <Link
          to="/signup"
          className="font-medium text-primary-600 hover:underline"
        >
          Regístrate
        </Link>
      </p>
    </form>
  );
}
