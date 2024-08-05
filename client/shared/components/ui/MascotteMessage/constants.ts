import { type IconSrc, type MascotteTypes, type MascotteMessageProps } from './types';

export const MASCOTTE_TYPES = {
  base: 'base',
  question: 'question',
  audio: 'audio',
} as const;

export const MASCOTTE_ICONS = {
  base: 'mascotte',
  question: 'mascotteQuestion',
  audio: 'mascotteAudio',
} satisfies Record<MascotteTypes, IconSrc>;

export const SIZE: Record<MascotteMessageProps['sizeVariant'], number> = {
  regular: 130,
  small: 50,
};
