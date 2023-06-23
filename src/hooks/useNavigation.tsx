import IconHome from 'components/atoms/icons/IconHome';
import IconFiles from 'components/atoms/icons/IconFiles';
import IconSettings from 'components/atoms/icons/IconSettings';
import IconFolder from 'components/atoms/icons/IconFolter';
import IconUsers from 'components/atoms/icons/IconUser';
import { Navigation } from 'types/Navigation';

export default function useNavigation() {
  const navigation: Navigation[] = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/',
      icon: (
        <IconHome className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 2,
      name: 'POS',
      link: '/pos',
      icon: (
        <IconFolder className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 3,
      name: 'Clientes',
      link: '/clients',
      icon: (
        <IconUsers className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 4,
      name: 'Proveedores',
      link: '/providers',
      icon: (
        <IconUsers className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 5,
      name: 'Facturación',
      link: '/providers',
      icon: (
        <IconFolder className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 6,
      name: 'Ingresos / Egresos',
      link: '/providers',
      icon: (
        <IconFolder className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 7,
      name: 'Inventario',
      icon: (
        <IconFiles className="text-gray-500 duration-75 group-hover:text-black" />
      ),
      sub: [
        {
          id: 7.1,
          name: 'Productos y Servicios',
          link: '/services',
        },
      ],
    },
    {
      id: 8,
      name: 'Contabilidad',
      link: '/accounting',
      icon: (
        <IconFiles className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
    {
      id: 9,
      name: 'Configuración',
      link: '/settings',
      icon: (
        <IconSettings className="text-gray-500 duration-75 group-hover:text-black" />
      ),
    },
  ];

  return {
    navigation,
  };
}
