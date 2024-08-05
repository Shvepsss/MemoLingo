import { ICON_NAMES } from 'app/shared/constants/iconNames';
import { MD3Colors } from 'app/shared/providers/theme';

import { ExerciseFeedbackProps } from './types';

export const FEEDBACK_TEXT: Record<ExerciseFeedbackProps['type'], string> = {
  correct: 'Nicely Done !',
  incorrect: 'Incorrect !',
};

export const ICON_VARIANT: Record<ExerciseFeedbackProps['type'], keyof typeof ICON_NAMES> = {
  correct: 'circleDone',
  incorrect: 'circleClose',
};
export const ANSWER_COLOR: Record<ExerciseFeedbackProps['type'], keyof MD3Colors> = {
  correct: 'primary60',
  incorrect: 'error80',
};
