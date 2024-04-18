import { Text } from 'react-native';

import { useTheme } from 'app/shared/hooks/styles';

import { TypographyProps } from './types';

export const Typography = ({ children, color, variant }: TypographyProps) => {
  const theme = useTheme();

  const fontStyle = theme.fonts[variant];

  const colorStyle = {
    color: color ? theme.colors[color] : undefined,
  };

  return <Text style={[colorStyle, fontStyle]}>{children}</Text>;
};
