'use client';

import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useState } from 'react';
import { api } from '@/shared/api';

/**
 * 로그인 페이지
 * 카카오 로그인만 지원합니다.
 */
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleKakaoLogin = async () => {
    try {
      setIsLoading(true);
      const data: { url: string } = await api.get('auth/kakao').json();
      const { url } = data;
      setIsLoading(false);
      window.location.href = url;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="lg">
        <Box
          bg="white"
          _dark={{ bg: 'gray.800' }}
          borderRadius="xl"
          p={8}
          boxShadow="2xl"
        >
          <Stack gap={8} align="center">
            {/* 로고 및 제목 */}
            <Stack gap={4} align="center" textAlign="center">
              <Heading size="lg" color="blue.500">
                stock sandbox
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                로그인하고 시작하세요
              </Text>
              <Text color="gray.600" _dark={{ color: 'gray.400' }}>
                가상 자금 1억원으로 시작하는 리스크 없는 투자 경험
              </Text>
            </Stack>

            {/* 카카오 로그인 버튼 */}
            <Stack gap={4} w="full">
              <Button
                size="lg"
                bg="#FEE500"
                color="black"
                _hover={{ bg: '#FDD835' }}
                _active={{ bg: '#FBC02D' }}
                onClick={handleKakaoLogin}
                loading={isLoading}
                loadingText="로그인 중..."
                w="full"
                py={6}
              >
                <Icon as={RiKakaoTalkFill} mr={2} />
                카카오로 시작하기
              </Button>
            </Stack>

            {/* 부가 정보 */}
            <Stack gap={2} align="center" textAlign="center">
              <Text
                fontSize="sm"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
              >
                간편하게 카카오 계정으로 시작하세요
              </Text>
              <Text
                fontSize="xs"
                color="gray.400"
                _dark={{ color: 'gray.500' }}
              >
                로그인 시 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
