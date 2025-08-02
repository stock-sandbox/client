/**
 * 숫자 값을 한국 원화 형식으로 포맷팅
 * @param value 숫자 값
 * @returns 포맷된 가격 문자열 (예: "25,000")
 */
export function formatPrice(value: number): string {
  return value.toLocaleString('ko-KR');
}

/**
 * 가격 변동과 변동률을 포맷팅
 * @param priceChange 가격 변동
 * @param priceChangePercent 가격 변동률
 * @returns 포맷된 변동 문자열 (예: "+5,750 (+29.87%)")
 */
export function formatPriceChange(
  priceChange: number,
  priceChangePercent: number
): string {
  const sign = priceChange >= 0 ? '+' : '';
  const formattedChange = formatPrice(Math.abs(priceChange));
  const formattedPercent = Math.abs(priceChangePercent).toFixed(2);
  return `${sign}${formattedChange} (${sign}${formattedPercent}%)`;
}

/**
 * 거래량을 간소화된 형식으로 포맷팅
 * @param volume 거래량
 * @returns 포맷된 거래량 문자열 (예: "2.5M", "1.2K")
 */
export function formatVolume(volume: number): string {
  if (volume >= 1_000_000) {
    return `${(volume / 1_000_000).toFixed(1)}M`;
  } else if (volume >= 1_000) {
    return `${(volume / 1_000).toFixed(1)}K`;
  } else {
    return volume.toString();
  }
}

/**
 * 가격 변동이 양수인지 확인
 * @param priceChange 가격 변동
 * @returns 양수이면 true, 음수이면 false
 */
export function isPositiveChange(priceChange: number): boolean {
  return priceChange >= 0;
}
