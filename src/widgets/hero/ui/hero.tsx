'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaRocket, FaGraduationCap } from 'react-icons/fa';

/**
 * 모의투자 사이트 히어로 섹션 위젯
 * 메인 헤드라인과 CTA 버튼을 포함합니다.
 */
export const Hero = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      color="white"
      py={20}
    >
      <Container maxW="1200px" textAlign="center">
        <Stack gap={6} align="center">
          <Heading size="2xl" fontWeight="bold">
            실전 같은 모의투자로
            <br />
            투자 실력을 키워보세요
          </Heading>
          <Text fontSize="xl" opacity={0.9} maxW="600px">
            가상 자금 1억원으로 시작하는 리스크 없는 투자 경험. 실제 주식 시장
            데이터를 활용해 안전하게 투자를 배워보세요.
          </Text>
          <Stack direction="row" gap={4} pt={4}>
            <Button
              size="lg"
              bg="white"
              color="blue.500"
              _hover={{ bg: 'gray.100' }}
            >
              <Icon as={FaRocket} mr={2} />
              지금 시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              <Icon as={FaGraduationCap} mr={2} />
              투자 교육
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
