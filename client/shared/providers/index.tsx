import { AuthProvider } from './auth';
import { NavigationProvider } from './navigation';
import { PlayerProvider } from './PlayerProvider';
import { SafeAreaProvider } from './SafeAreaProvider';
import { StorageProvider } from './storage';
import { ThemeProvider } from './theme/index';

export const Provider = () => {
  return (
    <StorageProvider>
      <PlayerProvider>
        <AuthProvider>
          <ThemeProvider>
            <SafeAreaProvider>
              <NavigationProvider />
            </SafeAreaProvider>
          </ThemeProvider>
        </AuthProvider>
      </PlayerProvider>
    </StorageProvider>
  );
};
