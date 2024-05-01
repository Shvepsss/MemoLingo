import { ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ICON_NAMES } from 'app/shared/constants/iconNames';
import { useTheme } from 'app/shared/hooks/styles/useTheme';
import { MD3Colors } from 'app/shared/providers/theme';

type Iconprops = {
  iconName: keyof typeof ICON_NAMES;
  size?: number;
  color?: keyof MD3Colors;
  style?: ViewStyle;
};

export const VectorIcon = ({ iconName, size, color, style }: Iconprops) => {
  const theme = useTheme();
  return (
    <Icon
      size={size}
      color={color ? theme.colors[color] : theme.colors.black0}
      name={ICON_NAMES[iconName]}
      style={style}
    />
  );
};
