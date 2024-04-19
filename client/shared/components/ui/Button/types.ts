import { type MD3Colors } from 'app/shared/providers/theme';
import { BUTTON_RADIUS } from './constants';
import { type TypographyProps } from '../Typography';

export type ButtonProps = {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  onPress: () => any;
  backgroundColor?: keyof MD3Colors;
  titleColor?: TypographyProps['color'];
  titleVariant?: TypographyProps['variant'];
  radius?: keyof typeof BUTTON_RADIUS;
  borderColor?: keyof MD3Colors;
  spaceBetween?: boolean;
};
