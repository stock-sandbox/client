'use client';

import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import { LoginButton } from '@/features/login';

/**
 * 로그인 페이지의 메인 콘텐츠를 표시하는 위젯
 * 로고, 제목, 설명, 로그인 버튼을 포함합니다.
 */
export const LoginCard = () => {
  return (
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
          <LoginButton />
        </Stack>

        {/* 부가 정보 */}
        <Stack gap={2} align="center" textAlign="center">
          <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
            간편하게 카카오 계정으로 시작하세요
          </Text>
          <Text fontSize="xs" color="gray.400" _dark={{ color: 'gray.500' }}>
            로그인 시 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
