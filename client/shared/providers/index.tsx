import { NavigationProvider } from './NavigationProvider';
import { ThemeProvider } from './theme/index';
import { SafeAreaProvider } from './SafeAreaProvider';

export const Provider = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
