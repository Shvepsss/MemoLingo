import React from 'react';

import { LessonContextType } from './types';

export const LESSON_CONTEXT_DEFAULT_VALUE: LessonContextType = {
  progress: 0,
  exercises: [],
  currentExercise: undefined,
  updateExercise: () => {},
  goToNextStep: () => {},
  statistic: {
    totalXpEarned: 0,
    totalExerciseTimeMs: null,
    accuracyPercentage: null,
  },
  correctInRowCounter: 0,
  isLoading: false,
  checkpoint: null,
  exitCheckpoint: () => {},
  addCheckpoint: () => {},
};

export const LessonContext = React.createContext<LessonContextType>(LESSON_CONTEXT_DEFAULT_VALUE);
