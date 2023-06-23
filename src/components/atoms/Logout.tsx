import { useNavigate } from 'react-router-dom';
import useAuthStore from 'store/auth';

export default function Logout() {
  const handleLogout = () => {
    useAuthStore.getState().clearSession();
    window.location.replace('/signin');
  };

  return (
    <button
      type="button"
      className="block w-full py-2 px-4 text-left text-sm hover:bg-gray-100"
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  );
}
