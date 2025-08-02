'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Button,
  Stack,
  Separator,
} from '@chakra-ui/react';
import { VolumeRankStock } from '@/shared/types/stock.types';
import {
  formatPrice,
  formatPriceChange,
  formatVolume,
  isPositiveChange,
  getChangeColor,
} from '@/entities/stock';

interface Props {
  /** 거래량 순위 데이터 */
  stocks: VolumeRankStock[];
}

/**
 * 인기 종목 랭킹 위젯
 * 실시간 거래량 순위를 표시합니다.
 */
export function PopularStocks({ stocks }: Props) {
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
          거래량 순위
        </Heading>
        <Button size="xs" variant="ghost">
          더보기
        </Button>
      </Flex>

      <Stack gap={3}>
        {stocks.map((stock) => {
          const isPositive = isPositiveChange(stock.priceChange);
          const priceChangeText = formatPriceChange(
            stock.priceChange,
            stock.priceChangePercent
          );

          return (
            <Box key={stock.stockCode}>
              <Flex justify="space-between" align="center" py={2}>
                <Stack direction="row" gap={3} align="center">
                  <Badge
                    colorScheme="blue"
                    variant="solid"
                    minW="20px"
                    textAlign="center"
                    justifyContent="center"
                  >
                    {stock.rank}
                  </Badge>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm">
                      {stock.stockName}
                    </Text>
                    <Text
                      fontSize="xs"
                      color="gray.600"
                      _dark={{ color: 'gray.300' }}
                    >
                      {stock.stockCode} • 거래량 {formatVolume(stock.volume)}
                    </Text>
                  </Box>
                </Stack>
                <Stack gap={0} align="end">
                  <Text fontWeight="bold" fontSize="sm">
                    {formatPrice(stock.currentPrice)}원
                  </Text>
                  <Text
                    fontSize="xs"
                    color={getChangeColor(isPositive)}
                    fontWeight="semibold"
                  >
                    {priceChangeText}
                  </Text>
                </Stack>
              </Flex>
              {stock.rank < stocks.length && <Separator />}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
