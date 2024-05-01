import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';

import { IconLocal } from 'app/shared/components/ui';
import { useTheme } from 'app/shared/hooks/styles';
import * as S from 'app/shared/styles/@style-atoms';

import { BottomNavigationProps } from './types';

const CONTAINER_PADDING = 10;
type BottomNavigationTabBarProps = BottomTabBarProps & Pick<BottomNavigationProps, 'routes'>;
export const BottomNavigationTabBar = ({
  state,
  descriptors,
  navigation,
  routes,
}: BottomNavigationTabBarProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...S.alignFlex.jSpaceBetween,
        ...S.flex.row,
        borderTopWidth: 1,
        borderTopColor: theme.colors.black40,
        paddingVertical: CONTAINER_PADDING,
        paddingHorizontal: CONTAINER_PADDING,
      }}
    >
      {state.routes.map((route, index) => {
        const inputRoute = routes.find(_route => _route.url === route.name);
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{
              backgroundColor: isFocused ? theme.colors.primary40 : undefined,
              borderRadius: 10,
              padding: 8,
            }}
          >
            <IconLocal icon={inputRoute?.icon} size={45} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
