'use client';

import { ChakraProvider as ChakraProviderBase } from '@chakra-ui/react';
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from '../../shared/ui/color-mode';
import { system } from '@/shared/styles/theme';

export function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProviderBase value={system}>
      <ColorModeProvider {...props} />
    </ChakraProviderBase>
  );
}
