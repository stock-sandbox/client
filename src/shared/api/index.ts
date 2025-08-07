import { ofetch } from 'ofetch';
import { getToken } from '../utils/get-token';

export const api = ofetch.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  async onRequest({ options }) {
    const { accessToken } = await getToken();
    if (accessToken) {
      const headers = new Headers(options.headers);
      headers.set('Authorization', `Bearer ${accessToken}`);
      options.headers = headers;
    }
  },
});
