import { Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props extends LinkProps {
  href: string;
}

export function Link({ children, href, ...props }: Props) {
  return (
    <ChakraLink
      asChild
      css={{
        '&:hover': {
          textDecoration: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      }}
      {...props}
    >
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
  );
}
