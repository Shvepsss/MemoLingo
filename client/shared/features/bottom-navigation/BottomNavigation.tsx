import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomNavigationTabBar } from './BottomNavigationTabBar';
import { BottomNavigationProps } from './types';

const Tab = createBottomTabNavigator();
export const BottomNavigation = ({ routes }: BottomNavigationProps) => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigationTabBar {...props} routes={routes} />}>
      {routes.map(route => (
        <Tab.Screen
          key={route.url}
          name={route.url}
          component={route.component}
          options={{ headerShown: false }}
        />
      ))}
    </Tab.Navigator>
  );
};
