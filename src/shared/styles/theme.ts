import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: '#6366f1' },
          50: { value: '#eef2ff' },
          100: { value: '#e0e7ff' },
          200: { value: '#c7d2fe' },
          300: { value: '#a5b4fc' },
          400: { value: '#818cf8' },
          500: { value: '#6366f1' }, // 메인 색상 (Primary)
          600: { value: '#4f46e5' },
          700: { value: '#4338ca' },
          800: { value: '#3730a3' },
          900: { value: '#312e81' },
        },
        success: { value: '#38a169' },
        warning: { value: '#d69e2e' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

// // Chakra UI의 기본 색상 팔레트를 그대로 활용하면서,
// // 우리만의 의미를 담은 색상 이름을 추가합니다.
// const colors = {
//   // 1. 브랜드 색상 (메인 컬러)
//   brand: {
//     50: '#eef2ff',
//     100: '#e0e7ff',
//     200: '#c7d2fe',
//     300: '#a5b4fc',
//     400: '#818cf8',
//     500: '#6366f1', // 메인 색상 (Primary)
//     600: '#4f46e5',
//     700: '#4338ca',
//     800: '#3730a3',
//     900: '#312e81',
//   },
//   // 2. 주식 등락 표현 색상
//   positive: {
//     // 상승 (전통적인 빨간색)
//     500: '#e53e3e',
//     600: '#c53030',
//   },
//   negative: {
//     // 하락 (전통적인 파란색)
//     500: '#3182ce',
//     600: '#2b6cb0',
//   },
//   // 3. 상태 표현 색상
//   success: {
//     // 성공
//     500: '#38a169',
//   },
//   warning: {
//     // 경고
//     500: '#d69e2e',
//   },
//   // 4. 텍스트 및 배경/경계선 색상
//   text: {
//     primary: '#1a202c', // 가장 중요한 텍스트 (gray.800)
//     secondary: '#718096', // 보조 텍스트 (gray.500)
//   },
//   bg: {
//     surface: '#ffffff', // 카드 등의 표면 배경 (white)
//     canvas: '#f7fafc', // 전체 페이지 배경 (gray.50)
//   },
//   border: {
//     default: '#e2e8f0', // 기본 경계선 (gray.200)
//   },
// };

// const theme = extendTheme({ colors });

// export default theme;
