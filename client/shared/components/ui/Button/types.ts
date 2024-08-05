import { ViewProps } from 'app/shared/components/ui/View';
import { type MD3Colors } from 'app/shared/providers/theme';

import { type TypographyProps } from '../Typography';

import { BUTTON_RADIUS } from './constants';

export type ButtonProps = {
  title: string | React.ReactNode;
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
  style?: ViewProps['style'];
};
