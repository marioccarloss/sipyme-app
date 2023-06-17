import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-2xl font-extrabold text-gray-900"
    >
      <img src={logo} alt="SiPyme" className="w-6" />
      <span>SiPyme</span>
    </Link>
  );
}
