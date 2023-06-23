import { ReactNode } from 'react';
import IconSort from 'components/atoms/icons/IconSort';
import IconSortToggle from './icons/IconSortToggle';

type Props = {
  sort: string | undefined;
};
export default function Sort(prop: Props) {
  const { sort } = prop;

  let sortIcon: ReactNode;

  switch (sort) {
    case 'asc':
      sortIcon = <IconSortToggle className="rotate-180" />;
      break;
    case 'desc':
      sortIcon = <IconSortToggle />;
      break;
    default:
      sortIcon = <IconSort />;
  }

  return sortIcon;
}
