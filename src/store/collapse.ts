import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isCollapsed: boolean;
};

type Actions = {
  toggleCollapse: () => void;
};

const collapseStore = create(
  persist<State & Actions>(
    (set) => ({
      isCollapsed: false,
      toggleCollapse: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    {
      name: 'app-collapse',
    }
  )
);

export const getIsCollapsedFromStore = () => {
  const { isCollapsed } = collapseStore((state) => state);
  return isCollapsed;
};

export default collapseStore;
