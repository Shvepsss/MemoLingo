import React from 'react';

import { useTimer } from 'app/shared/hooks/timer/useTimer';
import { normalizeString } from 'app/shared/utils/text/normalizeString';

import { useFetchAndProcessWords } from '../../hooks';
import { generateLessonExercises } from '../../utils/generateLessons';
import { generateLessonSteps } from '../../utils/generateSteps';

import { LESSON_CONTEXT_DEFAULT_VALUE, LessonContext } from './LessonContext';
import { LessonProviderProps, exerciseSteps, introSteps, lessonSteps, Statistic } from './types';

export const LessonProvider = ({ children }: LessonProviderProps) => {
  const [steps, setSteps] = React.useState<lessonSteps[] | null>(null);
  const [currentStep, setCurrentStep] = React.useState<lessonSteps | null>(
    LESSON_CONTEXT_DEFAULT_VALUE.step,
  );
  const [progress, setProgress] = React.useState<number>(0);
  const [userAnswer, setUserAnswer] = React.useState<string>('');
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState<boolean | null>(null);
  const [correctInRowCounter, setCorrectInRowCounter] = React.useState<number>(0);
  const [statistic, setStatistic] = React.useState<Statistic>({
    totalXpEarned: 0,
    totalExerciseTime: '',
    accuracyPercentage: 0,
  });
  const { fetchAndProcessWords } = useFetchAndProcessWords();
  const { startTimer, stopTimer, formattedTime } = useTimer();

  const calculateProgress = React.useCallback((steps: lessonSteps[]) => {
    if (!steps || steps.length === 0) return 0;

    const lessonExerciseSteps = steps.filter(step => {
      return typeof step.id === 'string' && step.id.includes('step') && step.completed === true;
    });

    const totalCompletedSteps = lessonExerciseSteps.length;

    if (totalCompletedSteps === 0) return 0;

    const totalSteps = steps.filter(
      step => typeof step.id === 'string' && step.id.includes('step'),
    ).length;

    return totalCompletedSteps / totalSteps;
  }, []);
  const handleAnswerChoice = React.useCallback((answer: string) => {
    setUserAnswer(answer);
    console.log('ANSWER IS SET', answer);
  }, []);

  const handleAnswerSubmit = React.useCallback(() => {
    const exerciseStep = currentStep as exerciseSteps;
    const isCorrect = normalizeString(userAnswer) === normalizeString(exerciseStep.answer);
    setIsAnswerCorrect(isCorrect);

    if (isCorrect && steps) {
      setCorrectInRowCounter(prev => prev + 1);
      setSteps(prevSteps => {
        if (!prevSteps) return null;

        setStatistic(prevStats => {
          const newStats = { ...prevStats };

          if (!exerciseStep.id.includes('mistake')) {
            newStats.totalXpEarned += 2;
          } else {
            newStats.totalXpEarned += 1;
          }

          return newStats;
        });

        const currentIndex = prevSteps.findIndex(step => step === currentStep);
        if (currentIndex !== -1) {
          const updatedStep = { ...prevSteps[currentIndex], completed: true };
          const updatedSteps = [...prevSteps];
          updatedSteps[currentIndex] = updatedStep;

          if (correctInRowCounter === 5) {
            const introStep = {
              id: 'row',
              type: 'row',
              completed: false,
            } as introSteps;
            updatedSteps.splice(currentIndex + 1, 0, introStep);
          }

          setCurrentStep(updatedStep);
          setProgress(calculateProgress(updatedSteps));
          return updatedSteps;
        }

        return prevSteps;
      });
    } else {
      setCorrectInRowCounter(0);
      setSteps(prevSteps => {
        if (!prevSteps) return null;

        const finishIndex = prevSteps.findIndex(step => step.type === 'finish');

        const mistakeStep: exerciseSteps = {
          ...exerciseStep,
          completed: false,
          id: `${exerciseStep.id}-mistake`,
        };

        const newSteps = [...prevSteps];
        newSteps.splice(finishIndex, 0, mistakeStep);

        if (!prevSteps.some(step => step.type === 'mistake')) {
          const introMistakeStep = {
            type: 'mistake',
            id: 'mistake',
            completed: false,
          } as introSteps;
          newSteps.splice(finishIndex, 0, introMistakeStep);
        }

        return newSteps;
      });
    }
  }, [calculateProgress, correctInRowCounter, currentStep, steps, userAnswer]);

  const goToNextStep = React.useCallback(() => {
    console.log('CURRENT STEP IS', currentStep?.type);

    if (steps && steps.length > 0) {
      const currentIndex = steps.findIndex(step => step === currentStep);

      if (currentIndex < steps.length - 1) {
        const newCurrentStep = steps[currentIndex + 1];
        if (newCurrentStep.type === 'finish') {
          stopTimer();
          const totalSteps = steps.filter(
            step =>
              typeof step.id === 'string' &&
              step.id.includes('step') &&
              !step.id.includes('mistake'),
          ).length;
          const mistakeSteps = steps.filter(
            step => typeof step.id === 'string' && step.id.includes('mistake'),
          ).length;

          setStatistic(prevStats => ({
            ...prevStats,
            totalExerciseTime: formattedTime(),
            accuracyPercentage: ((totalSteps - mistakeSteps) / totalSteps) * 100,
          }));
        }

        setCurrentStep(newCurrentStep);
      }

      setUserAnswer('');
    }
  }, [currentStep, formattedTime, steps, stopTimer]);

  const goToPreviousStep = React.useCallback(() => {
    if (steps && steps.length > 0) {
      const currentIndex = steps.findIndex(step => step === currentStep);
      if (currentIndex > 0) {
        setCurrentStep(steps[currentIndex - 1]);
      }
    }
  }, [currentStep, steps]);

  const contextValue = React.useMemo(
    () => ({
      step: currentStep,
      steps,
      goToNextStep,
      goToPreviousStep,
      handleAnswerChoice,
      handleAnswerSubmit,
      progress,
      isAnswerCorrect,
      userAnswer,
      statistic,
    }),
    [
      currentStep,
      steps,
      goToNextStep,
      goToPreviousStep,
      handleAnswerChoice,
      handleAnswerSubmit,
      progress,
      isAnswerCorrect,
      userAnswer,
      statistic,
    ],
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAndProcessWords('beginner');
      const exercises = data ? generateLessonExercises(data) : [];
      const initialSteps = generateLessonSteps(exercises);
      setSteps(initialSteps);

      if (initialSteps.length > 1) {
        setCurrentStep(initialSteps[1]);
      }

      startTimer();
    };

    fetchData();
  }, []);

  return <LessonContext.Provider value={contextValue}>{children}</LessonContext.Provider>;
};
