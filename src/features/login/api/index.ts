import { api } from '@/shared/api';

export const login = async () => {
  const data: { url: string } = await api.get('auth/kakao').json();
  const { url } = data;

  return url;
};
