import { api } from '@/shared/api';
import { VolumeRankResponse } from '@/shared/types/stock.types';

/**
 * 거래량 순위 조회 API
 * @param count 조회할 종목 수 (기본: 5)
 * @returns 거래량 순위 데이터
 */
export async function getVolumeRankStocks(
  count: number = 5
): Promise<VolumeRankResponse> {
  try {
    const response = await api
      .get(`kis-api/volume-rank?count=${count}`)
      .json<VolumeRankResponse>();
    return response;
  } catch (error) {
    console.error('거래량 순위 조회 중 오류가 발생했습니다:', error);
    throw new Error('거래량 순위 데이터를 가져오는데 실패했습니다.');
  }
}
