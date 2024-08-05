import React from 'react';

import { LessonContext } from './LessonContext';

export const useLessonContext = () => {
  const context = React.useContext(LessonContext);

  return context;
};
