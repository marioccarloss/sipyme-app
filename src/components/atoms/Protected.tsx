import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getTokenFromStore } from 'store/auth';

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = getTokenFromStore();

  return isAuthenticated.session !== null ? (
    children
  ) : (
    <Navigate to={{ pathname: '/signin' }} />
  );
}
