import { HomePage } from 'app/features/home/pages/Home';
import { SearchPage } from 'app/features/search/pages/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { APP_URL } from 'app/shared/constants/url';
import { withScreenProvider } from './withScreenProvider';
const Stack = createNativeStackNavigator();

const PRIVATE_SCREENS = {
  [APP_URL.private.search.index]: SearchPage,
};

const PUBLIC_SCREENS = {
  [APP_URL.public.home.index]: HomePage,
};

const SCREENS_MAP = Object.entries({ ...PRIVATE_SCREENS, ...PUBLIC_SCREENS });

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={APP_URL.public.home.index}
      screenOptions={{ headerShown: false }}
    >
      {SCREENS_MAP.map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={withScreenProvider(component)} />
      ))}
    </Stack.Navigator>
  );
};
