import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from 'types/User';

type State = {
  session: {
    isLoggedIn: boolean;
    user: User | null;
    token: string | null;
  };
};

type Actions = {
  setSession: (isLoggedIn: boolean, user: User, token: string) => void;
  clearSession: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      session: {
        isLoggedIn: false,
        user: null,
        token: null,
      },
      setSession: (isLoggedIn, user, token) =>
        set(() => ({
          session: {
            isLoggedIn,
            user,
            token,
          },
        })),
      clearSession: () =>
        set({
          session: {
            isLoggedIn: false,
            user: null,
            token: null,
          },
        }),
    }),
    {
      name: 'app-session',
    }
  )
);

export const getTokenFromStore = () => {
  const {
    session: { token },
  } = useAuthStore.getState();
  return token;
};

export default useAuthStore;
