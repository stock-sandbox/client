import { UserResponse } from '../model/user.types';
import { api } from '@/shared/api';
import { User } from '../model/user.types';

export const getUser = async (): Promise<User> => {
  const { user } = await api<UserResponse>('auth/me');
  return user;
};
