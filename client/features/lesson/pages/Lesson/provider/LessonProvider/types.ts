import React from 'react';

import { Exercise } from '../../types';

export type LessonProviderProps = {
  children: React.ReactNode;
};
export type LessonContextType = {
  progress: number;
  steps: lessonSteps[] | null;
  step: lessonSteps | null;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  handleAnswerChoice: (answer: any) => void;
  handleAnswerSubmit: () => void;
  isAnswerCorrect: boolean | null;
  userAnswer: string;
  statistic: Statistic;
};

export type Statistic = {
  totalXpEarned: number;
  totalExerciseTime: string;
  accuracyPercentage: number;
};
export type introSteps = {
  type: 'start' | 'finish' | 'mistake' | 'row';
  id: 'start' | 'finish' | 'mistake' | 'row';
  completed: boolean;
};
export type exerciseSteps = Pick<Exercise, 'variant' | 'type' | 'data' | 'answer'> & {
  completed: boolean;
  id: string;
};

export type lessonSteps = introSteps | exerciseSteps;
