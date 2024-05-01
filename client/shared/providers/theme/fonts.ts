import { Platform } from 'react-native';
import { MD3Theme, MD3TypescaleKey } from 'react-native-paper';
type MD3Type = MD3Theme['fonts'][MD3TypescaleKey];

const FONT_FAMILY = Platform.select({
  ios: 'System',
  default: 'sans-serif',
});

const FONT_WEIGHTS = {
  bold: '700',
  regular: '400',
  medium: '500',
  semiBold: '600',
  thin: '200',
} as const;

export const fontConfig = {
  h1: {
    fontFamily: FONT_FAMILY,
    fontSize: 40,
    lineHeight: 44,
    fontWeight: FONT_WEIGHTS.thin,
    letterSpacing: -1,
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontSize: 32,
    lineHeight: 32,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: -1,
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontSize: 30,
    lineHeight: 30,
    fontWeight: FONT_WEIGHTS.medium,
    letterSpacing: -0.5,
  },
  h4: {
    fontFamily: FONT_FAMILY,
    fontSize: 28,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 38,
    letterSpacing: -1,
  },
  h5: {
    fontFamily: FONT_FAMILY,
    fontSize: 22,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 32,
    letterSpacing: -1,
  },
  doubleExtraLargeMedium: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 26,
    letterSpacing: 0,
  },
  doubleExtraLargeRegular: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: 26,
    letterSpacing: 0,
  },
  extraLargeMedium: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 26,
    letterSpacing: -1,
  },
  extraLargeRegular: {
    fontFamily: FONT_FAMILY,
    fontSize: 18,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: 26,
    letterSpacing: -1,
  },
  largeMedium: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 22,
    letterSpacing: 0,
  },
  largeRegular: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: 22,
    letterSpacing: 0,
  },
  mediumTextMedium: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 20,
    letterSpacing: 0,
  },
  mediumTextRegular: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  smallMedium: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: 18,
    letterSpacing: 0,
  },
  smallRegular: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: FONT_WEIGHTS.regular,
    lineHeight: 18,
    letterSpacing: 0,
  },
  extraSmallMedium: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
  },
  extraSmallRegular: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
  },
  display1: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: 56,
    lineHeight: 61,
    letterSpacing: -1,
  },
  display2: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHTS.medium,
    fontSize: 28,
    lineHeight: 38,
    letterSpacing: 0,
  },
  display3: {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHTS.regular,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0,
  },
} satisfies Record<string, MD3Type>;

export type MD3Variants = typeof fontConfig;
