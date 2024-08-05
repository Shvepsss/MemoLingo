import { EXERCISE_TYPES } from 'app/shared/features/exerciseCreator/constants';

import { WORD_EXERCISE_CONFIG } from '../provider/LessonProvider/constants';
import { Exercise, clientWordType } from '../types';

import { getAnswerGenerator } from './getAnswerGenerator';
import { removeExtraCharacters } from './removeExtraCharacters';

const propertiesToClean: (keyof clientWordType)[] = ['example', 'meaning'];

export const generateLessonExercises = (data: clientWordType[]) => {
  const lessonExercises = [];
  const exercisesCount = Math.floor(Math.random() * 4) + 12;
  const exerciseTypes = Object.values(EXERCISE_TYPES);
  for (let i = 0; i < exercisesCount; i++) {
    const randomExerciseType = exerciseTypes[Math.floor(Math.random() * exerciseTypes.length)];
    const exerciseVariants = WORD_EXERCISE_CONFIG[randomExerciseType];
    const randomVariantIndex = Math.floor(Math.random() * exerciseVariants.length);
    const randomVariant = exerciseVariants[randomVariantIndex];
    const { wordIndex } = randomVariant;
    const selectedWords = wordIndex.map(index => data[index]).filter(word => word !== undefined);
    const wordsToClean = selectedWords.map(word => ({
      object: word,
      properties: propertiesToClean,
    }));
    const formattedWordsData = wordsToClean.map(obj => removeExtraCharacters(obj));

    const exercise = {
      type: randomExerciseType,
      variant: randomVariant.variant,
      data: formattedWordsData,
    };

    const answer = getAnswerGenerator(
      randomExerciseType,
      randomVariant.variant,
      formattedWordsData,
    );
    lessonExercises.push({
      ...exercise,
      answer,
    });
  }

  return lessonExercises as Exercise[];
};
