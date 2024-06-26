import React from 'react';

import { useFetchAndProcessWords } from '../../hooks';
import { generateLessonExercises } from '../../utils/generateLessons';

import { LessonContext } from './LessonContext';
import {
  LessonProviderProps,
  Statistic,
  LessonContextType,
  ExerciseStatus,
  CheckpointType,
  ExerciseItem,
} from './types';

const fiveInRow = 5;
const XPMistake = 1;
const XPAtFirst = 2;

const getCorrectInRow = (exercises: LessonContextType['exercises']) => {
  return exercises.reduceRight<{
    counter: number;
    didFail: boolean;
  }>(
    (acc, cur) => {
      if (acc.didFail) {
        return acc;
      }

      if (cur.status === ExerciseStatus.completed) {
        return {
          ...acc,
          counter: acc.counter + 1,
        };
      }

      if (cur.status === ExerciseStatus.failed) {
        return {
          ...acc,
          didFail: true,
        };
      }

      return acc;
    },
    { counter: 0, didFail: false },
  ).counter;
};

const getCheckpointType = (items: ExerciseItem[], activeItemIndex: number) => {
  const newCorrectInRowCounter = getCorrectInRow(items);

  if (newCorrectInRowCounter === fiveInRow) {
    return CheckpointType.strike;
  }

  const nextIndex = activeItemIndex + 1;
  const firstMistakeIndex = items.findIndex(item => item.failedExerciseId);
  if (nextIndex === firstMistakeIndex) {
    return CheckpointType.mistake;
  }

  if (nextIndex === items.length) {
    return CheckpointType.finish;
  }
};

export const LessonProvider = ({ children }: LessonProviderProps) => {
  const { fetchAndProcessWords, isLoading } = useFetchAndProcessWords();
  const [exercises, setExercises] = React.useState<LessonContextType['exercises']>([]);
  const [timeStartedMs, setTimeStartedMs] = React.useState<number | null>(null);
  const [timeEndedMs, setTimeEndedMs] = React.useState<number | null>(null);
  const [checkpoint, setCheckpoint] = React.useState<CheckpointType | null>(null);
  const currentExercise = exercises.find(item => item.isActiveStep);
  console.log('currentExercise', currentExercise);
  const correctInRowCounter = getCorrectInRow(exercises);

  const firstAttemptExercises = exercises.filter(
    item => item.status === ExerciseStatus.completed && !item.failedExerciseId,
  );

  const finishedAttemptExercises = exercises.filter(
    item => item.status !== ExerciseStatus.pending && !item.failedExerciseId,
  );

  const accuracyPercentage = finishedAttemptExercises.length
    ? (firstAttemptExercises.length / finishedAttemptExercises.length) * 100
    : null;

  const totalXpEarned = exercises.reduce<number>((acc, currentExercise) => {
    if (currentExercise.status === ExerciseStatus.completed) {
      const itemXp = currentExercise.failedExerciseId ? XPMistake : XPAtFirst;
      return acc + itemXp;
    }

    return acc;
  }, 0);
  const totalExerciseTimeMs = timeStartedMs && timeEndedMs ? timeEndedMs - timeStartedMs : null;
  const statistic = React.useMemo(
    () => ({
      totalXpEarned,
      totalExerciseTimeMs,
      accuracyPercentage,
    }),
    [accuracyPercentage, totalExerciseTimeMs, totalXpEarned],
  ) satisfies Statistic;

  const progress = exercises.length
    ? exercises.filter(item => item.status === ExerciseStatus.completed).length /
      exercises.filter(item => item.status !== ExerciseStatus.failed).length
    : 0;

  const goToNextStep = React.useCallback(() => {
    setExercises(_items => {
      const activeItemIndex = _items.findIndex(item => item.isActiveStep);
      const activeItem = _items[activeItemIndex];

      if (activeItem.status === ExerciseStatus.pending) {
        return _items;
      }

      const checkpointType = getCheckpointType(_items, activeItemIndex);

      if (checkpointType) {
        setCheckpoint(checkpointType);
      }

      return _items.map((item, index) => {
        if (index === activeItemIndex + 1) {
          return {
            ...item,
            isActiveStep: true,
          };
        }

        if (item.isActiveStep) {
          return {
            ...item,
            isActiveStep: false,
          };
        }

        return item;
      });
    });
  }, []);

  const exitCheckpoint = React.useCallback(() => {
    setCheckpoint(null);
  }, []);

  const updateExercise = React.useCallback<LessonContextType['updateExercise']>(
    (exerciseId, data) => {
      setExercises(_items => {
        let newItem: LessonContextType['exercises'][number] | undefined;

        const updatedItems = _items.map(item => {
          if (item.id === exerciseId) {
            if (data.status === ExerciseStatus.failed) {
              newItem = {
                id: `${item.id}failed`,
                failedExerciseId: item.id,
                isActiveStep: false,
                status: ExerciseStatus.pending,
                content: item.content,
              };
            }

            return {
              ...item,
              ...data,
            };
          }

          return item;
        });

        if (newItem) {
          updatedItems.push(newItem);
        }

        return updatedItems;
      });
    },
    [],
  );

  const contextValue = React.useMemo<LessonContextType>(
    () => ({
      progress,
      exercises,
      currentExercise,
      setExercises,
      goToNextStep,
      statistic,
      correctInRowCounter,
      isLoading,
      exitCheckpoint,
      checkpoint,
      addCheckpoint: setCheckpoint,
      updateExercise,
    }),
    [
      progress,
      exercises,
      currentExercise,
      goToNextStep,
      statistic,
      correctInRowCounter,
      isLoading,
      exitCheckpoint,
      checkpoint,
      updateExercise,
    ],
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAndProcessWords('beginner');
      const exercisesData = data ? generateLessonExercises(data) : [];

      setExercises(exercisesData);

      setTimeStartedMs(Date.now());
    };

    fetchData();
  }, []);

  return <LessonContext.Provider value={contextValue}>{children}</LessonContext.Provider>;
};
