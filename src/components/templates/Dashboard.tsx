import { ReactNode } from 'react';
import Header from 'components/organisms/Header';
import Menu from 'components/organisms/Menu';
import { getIsCollapsedFromStore } from 'store/collapse';

type Props = {
  view: ReactNode;
};

export default function Dashboard({ view }: Props) {
  const isCollapsed = getIsCollapsedFromStore();

  return (
    <div className="antialiased">
      <Header />
      <Menu />
      <main
        className={`bg-white p-8 pt-24 h-[100svh] ${
          isCollapsed ? 'md:ml-32' : 'md:ml-56 '
        }`}
      >
        {view}
      </main>
    </div>
  );
}
