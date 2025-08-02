import JsCookie from '@/shared/utils/cookies';

export const useLogout = () => {
  JsCookie.remove('accessToken');
  JsCookie.remove('refreshToken');

  window.location.href = '/';
};
