'use client';

import { Button, Icon } from '@chakra-ui/react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useLogin } from '@/features/login';

/**
 * 카카오 로그인 버튼
 * useLogin 훅을 사용하여 로그인 로직을 처리합니다.
 */
export function LoginButton() {
  const { isLoading, login } = useLogin();

  const handleKakaoLogin = async () => {
    login();
  };

  return (
    <Button
      size="lg"
      bg="#FEE500"
      color="black"
      _hover={{ bg: '#FDD835' }}
      _active={{ bg: '#FBC02D' }}
      onClick={handleKakaoLogin}
      loadingText="로그인 중..."
      w="full"
      py={6}
      loading={isLoading}
    >
      <Icon as={RiKakaoTalkFill} mr={2} />
      카카오로 시작하기
    </Button>
  );
}
