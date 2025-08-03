import { clientApi } from '@/shared/api/clientApi';

export const login = async () => {
  const data: { url: string } = await clientApi.get('auth/kakao').json();
  const { url } = data;

  return url;
};
