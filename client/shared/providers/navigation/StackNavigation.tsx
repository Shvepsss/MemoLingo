import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LessonPage } from 'app/features/lesson/pages/Lesson';
import { MainPage } from 'app/features/main/pages/BottomNavigation/MainPage';
import { SearchPage } from 'app/features/search/pages/Search';
import { SignInPage } from 'app/features/sign-in/pages/SignIn';
import { SignUpUser } from 'app/features/sign-up/pages/SignUpUser';
import { StartPage } from 'app/features/start/pages/Start';
import { APP_URL } from 'app/shared/constants/url';
import { useAuth } from 'app/shared/hooks/providers/useAuth';

import { AuthCredentials } from '../auth/types';

import { withBottomSheetProvider } from './withBottomSheetProvider';

const Stack = createNativeStackNavigator();
const PRIVATE_SCREENS = [SearchPage, LessonPage];
const PUBLIC_SCREENS = [MainPage, SignUpUser, StartPage, SignInPage];
const SCREENS_MAP = [...PRIVATE_SCREENS, ...PUBLIC_SCREENS];

const getInitialRouteName = (credentials: AuthCredentials) => {
  return credentials.token ? APP_URL.public.main.index : APP_URL.public.start.index;
};

export const StackNavigation = () => {
  const { credentials } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={getInitialRouteName(credentials)}
      screenOptions={{ headerShown: false }}
    >
      {SCREENS_MAP.map(component => (
        <Stack.Screen
          key={component.APP_URL}
          name={component.APP_URL}
          component={withBottomSheetProvider(component)}
        />
      ))}
    </Stack.Navigator>
  );
};
