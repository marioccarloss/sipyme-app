import Dashboard from 'components/templates/Dashboard';
import HomeView from 'components/organisms/home/Home';

export default function Home() {
  return <Dashboard view={<HomeView />} />;
}
