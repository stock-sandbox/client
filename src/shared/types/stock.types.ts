/**
 * 주식 관련 타입 정의
 */

/**
 * 거래량 순위 API 응답 데이터 구조
 */
export interface VolumeRankStock {
  /** 순위 */
  rank: number;
  /** 종목 코드 */
  stockCode: string;
  /** 종목명 */
  stockName: string;
  /** 현재가 */
  currentPrice: number;
  /** 가격 변동 */
  priceChange: number;
  /** 가격 변동률 (%) */
  priceChangePercent: number;
  /** 거래량 */
  volume: number;
  /** 전일 거래량 */
  previousVolume: number;
  /** 거래량 변동률 */
  volumeChangeRate: number;
  /** 거래 대금 */
  tradingValue: number;
}

/**
 * 거래량 순위 API 전체 응답 구조
 */
export interface VolumeRankResponse {
  success: boolean;
  message: string;
  data: VolumeRankStock[];
  timestamp: string;
  count: number;
}

/**
 * 기존 PopularStock 타입 (mock 데이터용)
 */
export interface PopularStock {
  rank: number;
  name: string;
  code: string;
  price: string;
  change: string;
  isPositive: boolean;
}

/**
 * 시장 지수 타입
 */
export interface MarketIndex {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}
