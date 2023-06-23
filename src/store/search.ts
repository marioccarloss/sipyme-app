import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isShowSearch: boolean;
};

type Actions = {
  toggleShowSearch: () => void;
};

const toggleSearchStore = create(
  persist<State & Actions>(
    (set) => ({
      isShowSearch: false,
      toggleShowSearch: () =>
        set((state) => ({ isShowSearch: !state.isShowSearch })),
    }),
    {
      name: 'app-search-toggle',
    }
  )
);

export const getIsShowSearchFromStore = () => {
  const { isShowSearch } = toggleSearchStore((state) => state);
  return isShowSearch;
};

export default toggleSearchStore;
