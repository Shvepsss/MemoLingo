export type ExerciseFeedbackProps = {
  type: keyof typeof EXERCISE_FEEDBACK_TYPES;
  details?: string | null;
  goToNextStep: () => any;
};
export const EXERCISE_FEEDBACK_TYPES = {
  correct: 'correct',
  incorrect: 'incorrect',
};
