import { User } from 'types/User';

export type UserSession = {
  user: User;
  'X-CSRFToken': string;
};
