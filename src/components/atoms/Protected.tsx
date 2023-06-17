import { Navigate } from 'react-router-dom';
import { getTokenFromStore } from 'store/auth';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = getTokenFromStore();

  return isAuthenticated ? children : <Navigate to={{ pathname: '/login' }} />;
}
