import { UserResponse } from '../model/user.types';
import { api } from '@/shared/api';

export const getUser = async () => {
  const { user }: { user: UserResponse } = await api('auth/me');
  return user;
};
