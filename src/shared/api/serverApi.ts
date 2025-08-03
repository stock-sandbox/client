import { getToken } from '../utils/get-token';

type RequestInitWithNext = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function serverApi(
  url: string,
  options: RequestInitWithNext = {}
) {
  const { accessToken, refreshToken } = await getToken();

  const baseHeaders: HeadersInit & { Authorization?: string } = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (accessToken) {
    baseHeaders['Authorization'] = `Bearer ${accessToken}`;
  }

  // 1. 첫 번째 요청 시도
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: baseHeaders,
  });

  // 2. 만약 401 에러(토큰 만료)가 발생했다면?
  if (response.status === 401) {
    console.log('토큰 재발급');

    // 리프레시 토큰조차 없으면 그냥 실패 처리
    if (!refreshToken) {
      console.error('Refresh token not found.');
      return response;
    }

    console.log('Access token expired. Attempting to refresh...');

    // 3. 새 토큰을 발급받기 위한 요청 (이 요청은 authFetch를 쓰면 안됨!)
    const refreshRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      }
    );

    // 4. 토큰 재발급 성공 시
    if (refreshRes.ok) {
      const newTokens = await refreshRes.json();
      const newAccessToken = newTokens.accessToken;
      const newRefreshToken = newTokens.refreshToken; // 서버가 새 리프레시 토큰을 준다면

      console.log(newAccessToken, newRefreshToken, 'newAccessToken');

      console.log('Token refreshed successfully.');

      //   // 5. 새로 받은 토큰을 쿠키에 저장
      //   cookieStore.set('accessToken', newAccessToken, {
      //     httpOnly: true,
      //     secure: true,
      //     path: '/',
      //   });
      //   if (newRefreshToken) {
      //     cookieStore.set('refreshToken', newRefreshToken, {
      //       httpOnly: true,
      //       secure: true,
      //       path: '/',
      //     });
      //   }

      // 6. 원래 요청을 '새로운 토큰'으로 재시도
      const newHeaders = {
        ...baseHeaders,
        Authorization: `Bearer ${newAccessToken}`,
      };
      console.log('Retrying the original request with new token.');
      response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        ...options,
        headers: newHeaders,
      });
    } else {
      // 7. 토큰 재발급 실패 시 (리프레시 토큰 만료 등)
      console.error('Failed to refresh token.');
      // 여기서 쿠키를 삭제하고 로그인 페이지로 리디렉션하는 로직을 추가할 수 있습니다.
      // throw new Error('Authentication failed');
    }
  }

  return response;
}
