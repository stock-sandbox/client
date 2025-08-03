import ky from 'ky';
import { getToken } from '../utils/get-token';
import { setCookie } from '../utils/set-token';

export const clientApi = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  hooks: {
    beforeRequest: [
      async (request) => {
        const { accessToken } = await getToken();
        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        const isBrowser = typeof window !== 'undefined';

        if (response.status === 401) {
          const { refreshToken: oldRefreshToken } = await getToken();
          if (oldRefreshToken) {
            const {
              accessToken,
              refreshToken,
            }: {
              accessToken: string;
              refreshToken: string;
            } = await ky
              .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
                json: {
                  refreshToken: oldRefreshToken,
                },
              })
              .json();

            setCookie(accessToken, refreshToken);
            request.headers.set('Authorization', `Bearer ${accessToken}`);
            return ky(request);
          }
        }
      },
    ],
  },
});
