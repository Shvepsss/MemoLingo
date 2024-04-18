import Icon from 'react-native-vector-icons/FontAwesome';
import { MD3Colors } from 'app/shared/providers/theme';
import { ICON_NAMES } from 'app/shared/constants/iconNames';
import { useTheme } from 'app/shared/hooks/styles/useTheme';
type Iconprops = {
  iconName: keyof typeof ICON_NAMES;
  size: number;
  color: keyof MD3Colors;
};

export const VectorIcon = ({ iconName, size, color }: Iconprops) => {
  const theme = useTheme();
  return (
    <Icon size={size} color={color ? theme.colors[color] : undefined} name={ICON_NAMES[iconName]} />
  );
};
