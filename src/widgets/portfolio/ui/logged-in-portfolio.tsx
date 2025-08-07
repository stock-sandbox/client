import { User } from '@/entities/user';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

interface Props {
  user: User;
}

export const LoggedInPortfolio = ({ user }: Props) => {
  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md" color="blue.500" _dark={{ color: 'blue.300' }}>
          내 포트폴리오
        </Heading>
        <Button size="xs" variant="ghost">
          더보기
        </Button>
      </Flex>

      <Stack gap={4}>
        <HStack justify="space-between">
          <Text fontWeight="semibold">총 자산</Text>
          <Text fontWeight="bold">{user?.cash.toLocaleString()}원</Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontWeight="semibold">보유 현금</Text>
          <Text fontWeight="bold">{user?.cash.toLocaleString()}원</Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontWeight="semibold">수익/손실</Text>
          <Text color="red" fontWeight="bold">
            +100,000원 (2.4%)
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontWeight="semibold">랭킹</Text>
          <Text fontWeight="bold">142위 / {(2345).toLocaleString()}명</Text>
        </HStack>
      </Stack>
    </Box>
  );
};
