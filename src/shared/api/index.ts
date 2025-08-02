import ky from 'ky';
import { getToken } from '../utils/getToken';

export const api = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  hooks: {
    beforeRequest: [
      async (request) => {
        const { accessToken } = await getToken();
        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
  },
});
