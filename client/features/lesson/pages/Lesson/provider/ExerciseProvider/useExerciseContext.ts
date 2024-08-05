import React from 'react';

import { ExerciseContext } from './ExerciseContext';

export const useExerciseContext = () => {
  const context = React.useContext(ExerciseContext);

  return context;
};
