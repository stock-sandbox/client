import JsCookie from './cookies';

const isBrowser = typeof window !== 'undefined';

export const getToken = async () => {
  if (isBrowser) {
    const accessToken = JsCookie.get('accessToken');
    const refreshToken = JsCookie.get('refreshToken');

    return { accessToken, refreshToken };
  } else {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();

    const accessToken = cookieStore.get('accessToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;

    return { accessToken, refreshToken };
  }
};
