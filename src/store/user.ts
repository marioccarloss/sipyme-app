import useAuthStore from 'store/auth';

export default function getUser() {
  const {
    session: { user },
  } = useAuthStore.getState();

  return user;
}
