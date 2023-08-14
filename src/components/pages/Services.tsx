import Dashboard from 'components/templates/Dashboard';
import ServicesPage from 'components/organisms/services/Show';

export default function Services() {
  return <Dashboard view={<ServicesPage />} />;
}
