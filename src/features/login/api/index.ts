import { api } from '@/shared/api';

export const login = async () => {
  const { url }: { url: string } = await api('auth/kakao');

  return url;
};
