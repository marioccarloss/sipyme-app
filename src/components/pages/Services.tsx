import { useLocation } from 'react-router-dom';
import Dashboard from 'components/templates/Dashboard';
import ServicesPage from 'components/organisms/services/Show';

export default function Services() {
  const location = useLocation();
  if (location.pathname.includes('show')) {
    return null;
  }
  return <Dashboard view={<ServicesPage />} />;
}
