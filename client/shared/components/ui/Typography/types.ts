import { MD3Colors, MD3Variants } from 'app/shared/providers/theme';

export type TypographyProps = {
  children: React.ReactNode;
  variant: keyof MD3Variants;
  color?: keyof MD3Colors;
};
