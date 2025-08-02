import { userOptions } from '@/entities/user';
import { ChakraProvider } from '@/shared/providers/chakra-provider';
import QueryProvider from '@/shared/providers/query-provider';
import { getQueryClient } from '@/shared/utils/get-query-client';
import { getToken } from '@/shared/utils/get-token';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();

  const { accessToken } = await getToken();

  if (accessToken) {
    void queryClient.prefetchQuery(userOptions());
  }

  return (
    <html suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ChakraProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>
              {children}
            </HydrationBoundary>
          </ChakraProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
