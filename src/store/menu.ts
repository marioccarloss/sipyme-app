import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isToggleMenu: boolean;
};

type Actions = {
  toggleMenu: () => void;
};

const menuStore = create(
  persist<State & Actions>(
    (set) => ({
      isToggleMenu: false,
      toggleMenu: () => set((state) => ({ isToggleMenu: !state.isToggleMenu })),
    }),
    {
      name: 'app-menu',
    }
  )
);

export const getToggleMenuFromStore = () => {
  const { isToggleMenu } = menuStore((state) => state);
  return isToggleMenu;
};

export default menuStore;
