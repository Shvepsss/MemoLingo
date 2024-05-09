import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainPage } from 'app/features/main/pages/BottomNavigation/MainPage';
import { SearchPage } from 'app/features/search/pages/Search';
import { SignInPage } from 'app/features/sign-in/pages/SignIn';
// import { SignUpIntro } from 'app/features/sign-up/pages/SignUpIntro';
import { SignUpUser } from 'app/features/sign-up/pages/SignUpUser';
import { StartPage } from 'app/features/start/pages/Start';
import { APP_URL } from 'app/shared/constants/url';
import { useAuth } from 'app/shared/hooks/providers/useAuth';

import { withScreenProvider } from './withScreenProvider';

const Stack = createNativeStackNavigator();
const PRIVATE_SCREENS = [SearchPage];
const PUBLIC_SCREENS = [MainPage, SignUpUser, StartPage, SignInPage];
const SCREENS_MAP = [...PRIVATE_SCREENS, ...PUBLIC_SCREENS];

export const StackNavigation = () => {
  const { credentials } = useAuth();
  console.log({ credentials });
  return (
    <Stack.Navigator
      initialRouteName={credentials.token ? APP_URL.public.main.index : APP_URL.public.start.index}
      screenOptions={{ headerShown: false }}
    >
      {SCREENS_MAP.map(component => (
        <Stack.Screen
          key={component.APP_URL}
          name={component.APP_URL}
          component={withScreenProvider(component)}
        />
      ))}
    </Stack.Navigator>
  );
};
