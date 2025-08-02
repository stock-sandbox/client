'use client';

import { Box, Container } from '@chakra-ui/react';
import { LoginCard } from '@/widgets/login-card';

/**
 * 로그인 페이지
 * 전체 페이지의 레이아웃을 담당하고 LoginCard 위젯을 렌더링합니다.
 */
export default function LoginPage() {
  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="lg">
        <LoginCard />
      </Container>
    </Box>
  );
}
