import { MD3Colors, MD3Variants } from 'app/shared/providers/theme';
import { TextProps } from 'react-native';

export type TypographyProps = Pick<TextProps, 'style'> & {
  children: React.ReactNode;
  variant: keyof MD3Variants;
  color?: keyof MD3Colors;
};
