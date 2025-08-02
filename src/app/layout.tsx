import { userOptions } from '@/entities/user';
import { ChakraProvider } from '@/shared/providers/chakra-provider';
import QueryProvider from '@/shared/providers/query-provider';
import { getQueryClient } from '@/shared/utils/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(userOptions());
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
