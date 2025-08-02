'use client';

import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { mockMarketIndices, getChangeColor } from '@/entities/stock';

/**
 * 주요 지수 현황 위젯
 * KOSPI, KOSDAQ 등의 주요 지수 정보를 표시합니다.
 */
export const MarketIndices = () => {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="md"
      p={6}
      _dark={{ bg: 'gray.800' }}
    >
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md" color="blue.500" _dark={{ color: 'blue.300' }}>
          📊 주요 지수 현황
        </Heading>
        <Badge colorScheme="green" variant="subtle">
          실시간
        </Badge>
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {mockMarketIndices.map((index) => (
          <Box
            key={index.name}
            p={4}
            bg="gray.50"
            borderRadius="md"
            _dark={{ bg: 'gray.700' }}
          >
            <Text
              fontSize="sm"
              color="gray.600"
              mb={1}
              _dark={{ color: 'gray.300' }}
            >
              {index.name}
            </Text>
            <Heading size="md" mb={2}>
              {index.value}
            </Heading>
            <Stack direction="row" gap={2} align="center">
              <Icon
                as={index.isPositive ? FaArrowUp : FaArrowDown}
                color={getChangeColor(index.isPositive)}
                fontSize="sm"
              />
              <Text
                fontSize="sm"
                color={getChangeColor(index.isPositive)}
                fontWeight="semibold"
              >
                {index.change} ({index.changePercent})
              </Text>
            </Stack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
