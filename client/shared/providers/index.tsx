import { NavigationProvider } from './NavigationProvider';
import { ThemeProvider } from './ThemeProvider';
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
