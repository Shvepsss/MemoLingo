import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainPage } from 'app/features/main/pages/BottomNavigation/MainPage';
import { SearchPage } from 'app/features/search/pages/Search';
import { SignUpIntro } from 'app/features/sign-up/pages/SignUpIntro';
import { SignUpUser } from 'app/features/sign-up/pages/SignUpUser';
import { StartPage } from 'app/features/start/pages/Start';
import { APP_URL } from 'app/shared/constants/url';

import { withScreenProvider } from './withScreenProvider';

const Stack = createNativeStackNavigator();

const PRIVATE_SCREENS = {
  [APP_URL.private.search.index]: SearchPage,
};

const PUBLIC_SCREENS = {
  [APP_URL.public.main.index]: MainPage,
  [APP_URL.public.signUp.profile]: SignUpUser,
  [APP_URL.public.signUp.intro]: SignUpIntro,
  [APP_URL.public.start.index]: StartPage,
};

const SCREENS_MAP = Object.entries({ ...PRIVATE_SCREENS, ...PUBLIC_SCREENS });

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_URL.public.start.index}
      screenOptions={{ headerShown: false }}
    >
      {SCREENS_MAP.map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={withScreenProvider(component)} />
      ))}
    </Stack.Navigator>
  );
};
