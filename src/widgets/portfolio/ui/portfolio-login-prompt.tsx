import { Link } from '@/shared/ui/chakra-link';
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';

export const PortfolioLoginPrompt = () => {
  return (
    <VStack
      //   spacing={4} // 자식 요소들 사이의 간격
      gap={4}
      align="center" // 수평 중앙 정렬
      justify="center" // 수직 중앙 정렬
      p={6} // 내부 여백
      bg="gray.50" // 은은한 배경색
      borderRadius="lg" // 둥근 모서리
      textAlign="center" // 내부 텍스트 중앙 정렬
      h="240px" // 기존 카드와 높이를 비슷하게 맞춰줍니다 (조정 가능)
    >
      <Heading as="h3" size="md" fontWeight="semibold">
        로그인하고 나만의 포트폴리오를 만드세요
      </Heading>

      <Text fontSize="sm" color="gray.600">
        가상 자금 1억 원으로 투자 실력을 키우고,
        <br />
        수익률 랭킹에 도전해보세요!
      </Text>

      <Link
        href="/login"
        bg="green.500"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        fontWeight="semibold"
        _hover={{ bg: 'green.400' }}
      >
        로그인 / 회원가입
      </Link>
    </VStack>
  );
};
