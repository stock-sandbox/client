import { ChakraProvider } from '@/app/_providers/chakra-provider';
import QueryProvider from '@/app/_providers/query-provider';

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
