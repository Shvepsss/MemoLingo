import { NavigationContainer } from '@react-navigation/native';

import { StackNavigation } from './StackNavigation';

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
