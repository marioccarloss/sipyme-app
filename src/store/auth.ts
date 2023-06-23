import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from 'types/User';

type State = {
  session: {
    isLoggedIn: boolean;
    user: User | null;
    token: string | null;
    session: string | null;
  };
};

type Actions = {
  setSession: (
    isLoggedIn: boolean,
    user: User,
    token: string,
    session: string
  ) => void;
  clearSession: () => void;
};

const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      session: {
        isLoggedIn: false,
        user: null,
        token: null,
        session: null,
      },
      setSession: (isLoggedIn, user, token, session) =>
        set(() => ({
          session: {
            isLoggedIn,
            user,
            token,
            session,
          },
        })),
      clearSession: () =>
        set(() => ({
          session: {
            isLoggedIn: false,
            user: null,
            token: null,
            session: null,
          },
        })),
    }),
    {
      name: 'app-session',
    }
  )
);

export const getTokenFromStore = () => {
  const {
    session: { token, session },
  } = useAuthStore.getState();
  return { token, session };
};

export default useAuthStore;
