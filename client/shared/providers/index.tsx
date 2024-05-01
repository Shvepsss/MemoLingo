import { NavigationProvider } from './NavigationProvider';
import { SafeAreaProvider } from './SafeAreaProvider';
import { ThemeProvider } from './theme/index';

export const Provider = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
