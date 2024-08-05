import { useTheme as usePaperTheme } from 'react-native-paper';

import { MD3Theme } from 'app/shared/providers/theme';

export const useTheme = () => {
  return usePaperTheme<MD3Theme>();
};
