import { useExerciseContext } from '../provider/ExerciseProvider/useExerciseContext';

export const useExerciseLogic = () => {
  const { handleAnswerChoice, handleAnswerSubmit } = useExerciseContext();
  return { handleAnswerChoice, handleAnswerSubmit };
};
