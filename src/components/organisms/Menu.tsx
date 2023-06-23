import { useState } from 'react';
import IconSearch from 'components/atoms/icons/IconSearch';
import Navigation from 'components/molecules/Navigation';
import Label from 'components/atoms/Label';
import IconArrow from 'components/atoms/icons/IconArrow';
import collapseStore, { getIsCollapsedFromStore } from 'store/collapse';
import { getToggleMenuFromStore } from '~/store/menu';

export default function Menu() {
  const toggleCollapse = collapseStore((state) => state.toggleCollapse);
  const isCollapsed = getIsCollapsedFromStore();
  const isToggle = getToggleMenuFromStore();

  return (
    <aside
      className={`
        ${isToggle ? 'translate-x-0' : 'hidden'}
           md:block fixed top-0 left-0 z-40 h-screen pt-14 transition-transform 
        ${
          isCollapsed ? 'translate-x-0 w-32' : '-translate-x-full w-56'
        } bg-white border-r border-gray-200 md:translate-x-0`}
    >
      <div
        id="menu"
        className={`overflow-y-auto py-5 px-3 h-full ${
          isCollapsed ? 'active' : ''
        }`}
      >
        <Navigation active={isCollapsed} />
      </div>
      <button
        type="button"
        id="menuToggle"
        className={`toggle__button -rotate-180 ${
          isCollapsed ? 'rotate-0' : ''
        }`}
        onClick={toggleCollapse}
      >
        <IconArrow />
      </button>
    </aside>
  );
}
