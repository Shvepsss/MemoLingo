import { lessonSteps } from '../provider/LessonProvider/types';
import { Exercise } from '../types';

export const generateLessonSteps = (exercises: Exercise[]): lessonSteps[] => {
  const lessonSteps: lessonSteps[] = [
    { type: 'start', completed: true, id: 'start' },
    ...exercises.map((exercise, index) => ({
      id: `step_${index + 1}`,
      type: exercise.type,
      variant: exercise.variant,
      completed: false,
      data: exercise.data,
      answer: exercise.answer,
    })),
    { type: 'finish', completed: false, id: 'finish' },
  ];
  return lessonSteps;
};
