import { AuthProvider } from './auth';
import { NavigationProvider } from './navigation';
import { SafeAreaProvider } from './SafeAreaProvider';
import { StorageProvider } from './storage';
import { ThemeProvider } from './theme/index';

export const Provider = () => {
  return (
    <StorageProvider>
      <AuthProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <NavigationProvider />
          </SafeAreaProvider>
        </ThemeProvider>
      </AuthProvider>
    </StorageProvider>
  );
};
