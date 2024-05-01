import { PaperProvider } from 'react-native-paper';

import { theme } from './theme';

export { type MD3Theme } from './theme';
export { type MD3Colors } from './colors';
export { type MD3Variants } from './fonts';

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
