import Cookies from 'js-cookie';

const isBrowser = typeof window !== 'undefined';

export const setCookie = async (accessToken: string, refreshToken: string) => {
  if (isBrowser) {
    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
  } else {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();

    cookieStore.set('accessToken', accessToken);
    cookieStore.set('refreshToken', refreshToken);
  }
};
