import React from 'react';

import { EXERCISE_TYPES, EXERCISE_VARIANTS } from 'app/shared/features/exerciseCreator/constants';

import { ClientWordType } from '../../types';

import { LEVELS } from './constants';

export enum ExerciseStatus {
  pending = 'pending',
  failed = 'failed',
  completed = 'completed',
}

export enum CheckpointType {
  strike = 'strike',
  finish = 'finish',
  mistake = 'mistake',
}
export type Exercise = {
  type: keyof typeof EXERCISE_TYPES;
  variant: keyof typeof EXERCISE_VARIANTS;
  data: ClientWordType[];
  answer: string | null;
};

export type ExerciseItem = {
  id: string;
  isActiveStep: boolean;
  status: ExerciseStatus;
  content: Exercise;
  failedExerciseId?: string;
};

export type LessonProviderProps = {
  children: React.ReactNode;
};
export type LessonContextType = {
  progress: number;
  exercises: ExerciseItem[];
  currentExercise: ExerciseItem | undefined;
  updateExercise: (exerciseId: string, data: Partial<ExerciseItem>) => void;
  goToNextStep: () => void;
  statistic: Statistic;
  correctInRowCounter: number;
  isLoading: boolean;
  checkpoint: CheckpointType | null;
  exitCheckpoint: () => void;
  addCheckpoint: (checkpointType: CheckpointType) => void;
};

export type ExerciseContextType = {
  userAnswer: string;
  handleAnswerChoice: (answer: any) => void;
  handleAnswerSubmit: () => void;
};

export type Statistic = {
  totalXpEarned: number;
  totalExerciseTimeMs: number | null;
  accuracyPercentage: number | null;
};
export type Level = keyof typeof LEVELS;

export type WordsRequestProps = {
  level: Level;
};
