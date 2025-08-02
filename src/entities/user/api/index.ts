import { api } from '@/shared/api';
import { UserResponse } from '../model/user.types';

export const getUser = async () => {
  const response = await api.get('auth/me');
  const data = (await response.json()) as UserResponse;
  return data.user;
};
