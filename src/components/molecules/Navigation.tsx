import { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavigation from 'hooks/useNavigation';
import { Navigation as NavigationType } from 'types/Navigation';
import IconArrow from 'components/atoms/icons/IconArrow';

type Props = {
  active: boolean;
};

export default function Navigation(props: Props) {
  const { active } = props;
  const { navigation } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <ul className="space-y-2">
      {navigation.map((item: NavigationType) => (
        <li key={item.id}>
          {item.link !== undefined ? (
            <Link
              to={item.link}
              className={`flex items-center px-2 py-2 font-medium text-gray-900 rounded-md group hover:bg-gray-100 hover:text-gray-900
            ${
              active
                ? 'flex-col justify-end items-center text-center text-xs'
                : 'text-sm'
            }`}
            >
              {item.icon}
              <div
                className={`flex-1 ml-3 break-words whitespace-normal w-full ${
                  active ? 'ml-auto mr-auto text-center' : 'text-left '
                }`}
              >
                {item.name}
              </div>
            </Link>
          ) : (
            <div className="relative">
              <button
                type="button"
                className={`flex items-center px-2 py-2 font-medium text-gray-900 rounded-md group w-full hover:bg-gray-100 hover:text-gray-900
                ${
                  active
                    ? 'flex-col justify-end items-center text-center text-xs'
                    : 'text-sm'
                }`}
                onClick={handleToggle}
              >
                {item.icon}
                <div
                  className={`flex-1 ml-3 break-words whitespace-normal w-full ${
                    active ? 'ml-auto mr-auto text-center' : 'text-left '
                  }`}
                >
                  {item.name}
                </div>
                {isOpen ? (
                  <IconArrow className="-rotate-90" />
                ) : (
                  <IconArrow className="rotate-90" />
                )}
              </button>
              {/* Your dropdown component here */}
              {isOpen && (
                <div className="relative w-full mt-2">
                  <ul className="py-1">
                    {item.sub?.map((subNavigation) => (
                      <li key={subNavigation.id}>
                        <a
                          href={subNavigation.link}
                          className="block py-2 pr-2 pl-6 text-sm rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {subNavigation.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
