import JsCookie from '@/shared/utils/cookies';

export const useLogout = () => {
  const logout = () => {
    JsCookie.remove('accessToken');
    JsCookie.remove('refreshToken');

    window.location.href = '/';
  };

  return { logout };
};
