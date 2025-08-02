import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { MarketIndices } from '@/widgets/market-indices';
import { PopularStocks } from '@/widgets/popular-stocks';
import { Features } from '@/widgets/features';
import { Cta } from '@/widgets/cta';
import { getVolumeRankStocks } from '@/entities/stock';
import { VolumeRankStock } from '@/shared/types/stock.types';

/**
 * 모의투자 사이트 메인 페이지
 * FSD 아키텍쳐를 따라 위젯들로 구성되어 있습니다.
 */
export default async function HomePage() {
  let volumeRankStocks: VolumeRankStock[] = [];

  try {
    const response = await getVolumeRankStocks(5);
    volumeRankStocks = response.data;
    console.log(volumeRankStocks);
  } catch (error) {
    console.error('거래량 순위 데이터 조회 실패:', error);
  }

  return (
    <Box bg="gray.50" minH="100vh" _dark={{ bg: 'gray.900' }}>
      {/* 헤더 */}
      <Header />

      {/* 히어로 섹션 */}
      <Hero />

      {/* 메인 컨텐츠 */}
      <Container maxW="1200px" py={12}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          {/* 주요 지수 현황 */}
          <GridItem>
            <MarketIndices />
          </GridItem>

          {/* 인기 종목 랭킹 */}
          <GridItem>
            <PopularStocks stocks={volumeRankStocks} />
          </GridItem>
        </Grid>

        {/* 서비스 특징 */}
        <Features />

        {/* CTA 섹션 */}
        <Cta />
      </Container>
    </Box>
  );
}
