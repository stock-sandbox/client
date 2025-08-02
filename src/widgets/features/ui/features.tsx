'use client';

import { Box, Grid, Heading, Text, Stack, Icon } from '@chakra-ui/react';
import { FaShieldAlt, FaChartLine, FaUserFriends } from 'react-icons/fa';

/**
 * 서비스 특징 위젯
 * 모의투자 서비스의 주요 특징들을 소개합니다.
 */
export const Features = () => {
  return (
    <Box mt={16}>
      <Stack gap={8} textAlign="center" mb={12} align="center">
        <Heading size="lg" color="blue.500" _dark={{ color: 'blue.300' }}>
          왜 모의투자 아카데미를 선택해야 할까요?
        </Heading>
        <Text
          fontSize="lg"
          color="gray.600"
          maxW="600px"
          _dark={{ color: 'gray.300' }}
        >
          실제 투자 전에 안전하게 경험을 쌓고, 체계적인 학습으로 투자 실력을
          향상시키세요.
        </Text>
      </Stack>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
        <Box
          bg="white"
          shadow="md"
          borderRadius="md"
          p={6}
          textAlign="center"
          _dark={{ bg: 'gray.800' }}
        >
          <Stack gap={4} align="center">
            <Icon as={FaShieldAlt} fontSize="48px" color="green.500" />
            <Heading size="md">안전한 학습 환경</Heading>
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
              실제 자금 없이 가상 자금으로 안전하게 투자를 배우고 연습할 수
              있습니다.
            </Text>
          </Stack>
        </Box>

        <Box
          bg="white"
          shadow="md"
          borderRadius="md"
          p={6}
          textAlign="center"
          _dark={{ bg: 'gray.800' }}
        >
          <Stack gap={4} align="center">
            <Icon as={FaChartLine} fontSize="48px" color="blue.500" />
            <Heading size="md">실시간 데이터</Heading>
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
              실제 주식 시장과 동일한 데이터를 활용하여 현실적인 투자 경험을
              제공합니다.
            </Text>
          </Stack>
        </Box>

        <Box
          bg="white"
          shadow="md"
          borderRadius="md"
          p={6}
          textAlign="center"
          _dark={{ bg: 'gray.800' }}
        >
          <Stack gap={4} align="center">
            <Icon as={FaUserFriends} fontSize="48px" color="purple.500" />
            <Heading size="md">커뮤니티 학습</Heading>
            <Text color="gray.600" _dark={{ color: 'gray.300' }}>
              다른 투자자들과 정보를 공유하고 함께 성장할 수 있는 커뮤니티를
              제공합니다.
            </Text>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};
