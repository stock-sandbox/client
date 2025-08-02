import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get('accessToken');
  const refreshToken = cookieStore.get('refreshToken');

  cookieStore.set('accessToken', accessToken?.value ?? '');
  cookieStore.set('refreshToken', refreshToken?.value ?? '');

  return NextResponse.redirect(new URL('/', request.url));
}
