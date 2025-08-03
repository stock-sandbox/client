import { ChakraProvider } from '@/shared/providers/chakra-provider';
import QueryProvider from '@/shared/providers/query-provider';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
