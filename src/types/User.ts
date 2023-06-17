export type User = {
  id: number;
  password: string;
  last_login: null;
  is_superuser: boolean;
  email: string;
  name: string;
  last_name: null;
  is_superadmin: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: Date;
  updated_at: Date;
  rol: number;
  enterprise: number;
  groups: string[];
  user_permissions: string[];
};
