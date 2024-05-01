import { MD3LightTheme as DefaultTheme, configureFonts } from 'react-native-paper';
import { MD3Theme as DefaultMD3Theme } from 'react-native-paper/lib/typescript/types';

import { MD3Colors, customColors } from './colors';
import { MD3Variants, fontConfig } from './fonts';

export type MD3Theme = Omit<DefaultMD3Theme, 'colors'> & {
  colors: MD3Colors;
  fonts: MD3Variants;
};

export const theme: MD3Theme = {
  ...DefaultTheme,
  isV3: true,
  colors: {
    ...DefaultTheme.colors,
    ...customColors,
  },

  fonts: configureFonts({ config: fontConfig }) as unknown as MD3Theme['fonts'],
};
