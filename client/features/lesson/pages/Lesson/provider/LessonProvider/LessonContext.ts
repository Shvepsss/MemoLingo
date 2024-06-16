import React from 'react';

import { LessonContextType, introSteps } from './types';

const INTRO_STEPS: { [key: string]: introSteps } = {
  start: {
    type: 'start',
    id: 'start',
    completed: false,
  },
  finish: {
    type: 'finish',
    id: 'finish',
    completed: false,
  },
  mistake: {
    type: 'mistake',
    id: 'mistake',
    completed: false,
  },
  row: {
    type: 'row',
    id: 'row',
    completed: false,
  },
};

export const LESSON_CONTEXT_DEFAULT_VALUE: LessonContextType = {
  isAnswerCorrect: null,
  progress: 0,
  steps: null,
  step: INTRO_STEPS.start,
  goToNextStep: () => {},
  goToPreviousStep: () => {},
  handleAnswerChoice: () => {},
  handleAnswerSubmit: () => {},
  userAnswer: '',
  statistic: {
    totalXpEarned: 0,
    totalExerciseTime: '',
    accuracyPercentage: 0,
  },
};

export const LessonContext = React.createContext<LessonContextType>(LESSON_CONTEXT_DEFAULT_VALUE);
