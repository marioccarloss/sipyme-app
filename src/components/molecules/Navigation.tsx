import { Link } from 'react-router-dom';
import useNavigation from 'hooks/useNavigation';

export default function Navigation() {
  const { navigation } = useNavigation();

  return (
    <ul className="space-y-2">
      {navigation.map((item) => (
        <li key={item.id}>
          <Link
            to={item.link}
            className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md group hover:bg-gray-100 hover:text-gray-900"
          >
            {item.icon}
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
