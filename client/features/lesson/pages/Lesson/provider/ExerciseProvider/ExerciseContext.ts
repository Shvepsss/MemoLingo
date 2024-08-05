import React from 'react';

import { ExerciseContextType } from './types';

export const EXERCISE_CONTEXT_DEFAULT_VALUE: ExerciseContextType = {
  step: undefined,
  handleAnswerChoice: () => {},
  handleAnswerSubmit: () => {},
  userAnswer: null,
};

export const ExerciseContext = React.createContext<ExerciseContextType>(
  EXERCISE_CONTEXT_DEFAULT_VALUE,
);
