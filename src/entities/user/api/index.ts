import { clientApi } from '@/shared/api/clientApi';
import { UserResponse } from '../model/user.types';

export const getUser = async () => {
  const response = await clientApi.get('auth/me');
  const data = (await response.json()) as UserResponse;
  return data.user;
};
