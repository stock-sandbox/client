import { MarketIndex, PopularStock } from '@/shared/types/stock.types';

/**
 * 주요 지수 mock 데이터
 */
export const mockMarketIndices: MarketIndex[] = [
  {
    name: 'KOSPI',
    value: '2,485.67',
    change: '+15.23',
    changePercent: '+0.62%',
    isPositive: true,
  },
  {
    name: 'KOSDAQ',
    value: '745.89',
    change: '-8.45',
    changePercent: '-1.12%',
    isPositive: false,
  },
  {
    name: 'KRX 100',
    value: '5,234.12',
    change: '+12.34',
    changePercent: '+0.24%',
    isPositive: true,
  },
  {
    name: 'USD/KRW',
    value: '1,345.50',
    change: '+5.20',
    changePercent: '+0.39%',
    isPositive: true,
  },
];

/**
 * 인기 종목 mock 데이터
 */
export const mockPopularStocks: PopularStock[] = [
  {
    rank: 1,
    name: '삼성전자',
    code: '005930',
    price: '71,500',
    change: '+2.1%',
    isPositive: true,
  },
  {
    rank: 2,
    name: 'SK하이닉스',
    code: '000660',
    price: '123,000',
    change: '+3.2%',
    isPositive: true,
  },
  {
    rank: 3,
    name: 'LG에너지솔루션',
    code: '373220',
    price: '385,000',
    change: '-1.5%',
    isPositive: false,
  },
  {
    rank: 4,
    name: 'NAVER',
    code: '035420',
    price: '189,500',
    change: '+0.8%',
    isPositive: true,
  },
  {
    rank: 5,
    name: '카카오',
    code: '035720',
    price: '45,200',
    change: '-2.3%',
    isPositive: false,
  },
];

/**
 * 주식 가격 변화 색상 반환 함수
 */
export const getChangeColor = (isPositive: boolean) => {
  return isPositive ? 'red.500' : 'blue.500';
};
