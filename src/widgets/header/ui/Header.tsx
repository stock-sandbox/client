'use client';

import { Box, Container, Flex, Heading, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

/**
 * 모의투자 사이트 헤더 위젯
 * 네비게이션 및 로고를 포함합니다.
 */
export const Header = () => {
  const router = useRouter();
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      shadow="sm"
      _dark={{ bg: 'gray.800' }}
    >
      <Container maxW="1200px" py={4}>
        <Flex justify="space-between" align="center">
          <Heading size="lg" color="blue.500" _dark={{ color: 'blue.300' }}>
            📈 모의투자 아카데미
          </Heading>
          <Stack direction="row" gap={4}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/domestic')}
            >
              국내
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/overseas')}
            >
              해외
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/portfolio')}
            >
              포트폴리오
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/ranking')}
            >
              랭킹
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/community')}
            >
              커뮤니티
            </Button>
            <Button
              variant="outline"
              colorScheme="blue"
              size="sm"
              onClick={() => router.push('/login')}
            >
              로그인
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
