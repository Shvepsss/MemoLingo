import { IconLocalProps } from '../IconLocal';

import { MASCOTTE_TYPES } from './constants';

export type MascotteTypes = keyof typeof MASCOTTE_TYPES;

export type IconSrc = IconLocalProps['icon'];

export type MascotteMessageProps = {
  mascotteVariant: MascotteTypes;
  data: string;
  sizeVariant: 'regular' | 'small';
};
