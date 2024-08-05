import { ExerciseTypes, ExerciseVariants } from 'app/shared/features/exerciseCreator/types';

import { ExerciseItem, ExerciseStatus } from '../provider/LessonProvider/types';
import { ClientWordType } from '../types';

import { getAnswerGenerator } from './getAnswerGenerator';
import { removeExtraCharacters } from './removeExtraCharacters';

export const generateExerciseItems = (
  selectedExercises: {
    type: ExerciseTypes;
    variant: ExerciseVariants;
    words: ClientWordType[];
  }[],
  propertiesToClean: (keyof ClientWordType)[],
) => {
  const lessonExercises: ExerciseItem[] = selectedExercises.map((exercise, index) => {
    const formattedData = exercise.words.map(exerciseWord =>
      removeExtraCharacters({
        object: exerciseWord,
        properties: propertiesToClean,
      }),
    );

    const answer = getAnswerGenerator(exercise.type, exercise.variant, formattedData);

    const exerciseItem: ExerciseItem = {
      id: `step_${index + 1}`,
      content: {
        type: exercise.type,
        variant: exercise.variant,
        data: formattedData,
        answer,
      },
      failedExerciseId: undefined,
      isActiveStep: index === 0,
      status: ExerciseStatus.pending,
    };

    return exerciseItem;
  });

  return lessonExercises;
};
