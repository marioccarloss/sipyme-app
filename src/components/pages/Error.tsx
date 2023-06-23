import { Link } from 'react-router-dom';
import Dashboard from 'components/templates/Dashboard';

export default function Error() {
  return (
    <Dashboard
      view={
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold">404</h1>
          <p className="text-xl">Página no encontrada</p>
          <Link to="/">Volver al home</Link>
        </div>
      }
    />
  );
}
