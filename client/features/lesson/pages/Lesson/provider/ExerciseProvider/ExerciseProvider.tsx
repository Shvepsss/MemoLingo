import React from 'react';

import { normalizeString } from 'app/shared/utils/text/normalizeString';

import { useLessonContext } from '../LessonProvider';
import { ExerciseStatus } from '../LessonProvider/types';

import { ExerciseContext } from './ExerciseContext';

type ExerciseProviderProps = {
  children: React.ReactNode;
  stepId: string | undefined;
};
export const ExerciseProvider = ({ children, stepId }: ExerciseProviderProps) => {
  const [userAnswer, setUserAnswer] = React.useState<string | null>(null);
  const { exercises, updateExercise } = useLessonContext();
  const exercise = exercises.find(item => item.id === stepId);

  const handleAnswerChoice = React.useCallback((answer: string) => {
    setUserAnswer(answer);
  }, []);

  const handleAnswerSubmit = React.useCallback(() => {
    if (!exercise?.content.answer) {
      return;
    }

    if (userAnswer !== null) {
      const isCorrect = normalizeString(exercise.content.answer) === normalizeString(userAnswer);

      updateExercise(stepId, {
        status: isCorrect ? ExerciseStatus.completed : ExerciseStatus.failed,
      });
    }
  }, [exercise, stepId, updateExercise, userAnswer]);

  const contextValue = React.useMemo(
    () => ({
      step: exercise!,
      userAnswer,
      handleAnswerChoice,
      handleAnswerSubmit,
    }),
    [exercise, handleAnswerChoice, handleAnswerSubmit, userAnswer],
  );

  return <ExerciseContext.Provider value={contextValue}>{children}</ExerciseContext.Provider>;
};
