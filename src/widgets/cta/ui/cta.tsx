'use client';

import { Box, Heading, Text, Button, Stack, Icon } from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';

/**
 * CTA(Call To Action) 섹션 위젯
 * 사용자 행동을 유도하는 마지막 섹션입니다.
 */
export const Cta = () => {
  return (
    <Box mt={16} textAlign="center">
      <Box
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        borderRadius="xl"
        p={12}
        color="white"
      >
        <Stack gap={6} align="center">
          <Heading size="lg">지금 바로 시작해보세요!</Heading>
          <Text fontSize="lg" opacity={0.9}>
            회원가입하면 즉시 1억원의 가상 자금을 받을 수 있습니다
          </Text>
          <Button
            size="lg"
            bg="white"
            color="blue.500"
            _hover={{ bg: 'gray.100' }}
          >
            <Icon as={FaTrophy} mr={2} />
            무료로 시작하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
